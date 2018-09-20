import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss', '../../app.component.scss']
})
export class CadastrarComponent implements OnInit {

  cliente = {
    nome: '',
    cnh: '',
    cpf: '',
    cnpj: '',
    tipo_cliente : 'Pessoa Física'
  };

  params: any;

  newTelefones = [];
  newEmails = [];

  telefones = [];
  emails = [];


  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  salvarTelefone(form: NgForm) {
    if (form.value.telefone) {
      if (this.params) {
        this.clienteService.adicionarTelefone({telefone: form.value.telefone, id_cliente: this.params})
        .subscribe(
          res => this.getCliente(),
          erro => console.error(erro)
        );
      } else {
        this.newTelefones.push(form.value);
      }
      form.reset();
    }
  }

  salvarEmail(form: NgForm) {
    if (form.value.email) {
      if (this.params) {
        this.clienteService.adicionarEmail({email: form.value.email, id_cliente: this.params})
        .subscribe(
          res => this.getCliente(),
          erro => console.error(erro)
        );
      } else {
        this.newEmails.push(form.value);
      }
      form.reset();
    }
  }

  deleteTelefone(index) {
    this.newTelefones.splice(index, 1);
  }

  deleteEmail(index) {
    this.newEmails.splice(index, 1);
  }

  deleteTelefoneDb(telefone) {
    this.clienteService.deleteTelefone(this.params, telefone)
    .subscribe(
      res => this.getCliente(),
      erro => console.error(erro)
    );
  }

  deleteEmailDb(email) {
    this.clienteService.deleteEmail(this.params, email)
    .subscribe(
      res => this.getCliente(),
      erro => console.error(erro)
    );
  }

  mudarPessoa(tipo) {
    this.cliente.tipo_cliente = tipo;
  }

  salvarCliente(form: NgForm) {
    form.value.cnpj || (form.value.cnpj = null); 
    form.value.cpf || (form.value.cpf = null); 
    if (this.params) {
      this.clienteService.alteraCliente(this.params, form.value)
      .subscribe(
        res => this.router.navigate(['/cliente']),
        erro => console.error(erro)
      );
    } else {
      form.value.telefone = this.newTelefones;
      form.value.email = this.newEmails;
      this.clienteService.cadastrarCliente(form.value)
      .subscribe(
        res => this.router.navigate(['/cliente']),
        erro => console.error(erro)
      );
   }
  }

  getCliente() {
    this.emails = [];
    this.telefones = [];
    this.clienteService.clienteById(this.params)
      .subscribe(
        res => {
          this.cliente = res[0];
          res[0].email.forEach(element => {
            this.emails.push({email: element});
          });
          res[0].telefone.forEach(element => {
            this.telefones.push({telefone: element});
          });
        },
        erro => console.error(erro)
      );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => this.params = +res['id']);
    if (this.params) {
      this.getCliente();
    }
  }

}
