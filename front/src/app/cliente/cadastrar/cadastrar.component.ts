import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    id_tipo_cliente : 'Pessoa Física'
  };

  newTelefones = [];
  newEmails = [];


  constructor(
    private clienteService: ClienteService
  ) { }

  salvarTelefone(form: NgForm) {
    this.newTelefones.push(form.value);
    form.reset();
  }

  salvarEmail(form: NgForm) {
    this.newEmails.push(form.value);
    form.reset();
  }

  deleteTelefone(index) {
    this.newTelefones.splice(index, 1);
  }

  deleteEmail(index) {
    this.newEmails.splice(index, 1);
  }

  mudarPessoa(tipo) {
    this.cliente.id_tipo_cliente = tipo;
  }

  salvarCliente(form: NgForm) {
    form.value.telefone = this.newTelefones;
    form.value.email = this.newEmails;
    console.log(form.value);
    this.clienteService.cadastrarCliente(form.value)
    .subscribe(
      res => console.log(res),
      erro => console.error(erro)
    );
  }

  ngOnInit() {
  }

}
