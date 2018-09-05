import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss', '../../app.component.scss']
})
export class CadastrarComponent implements OnInit {

  cliente = {
    nome: '',
    telefone: '',
    email: '',
    cpf_cnpj: ''
  };

  constructor(private clienteService: ClienteService) { }

  salvarCliente(formCliente) {
    this.clienteService.postCliente(formCliente.value).subscribe(
      res => {
        console.log(res);
      },
        erro => {
        console.log(erro);
      }
    );
  }

  ngOnInit() {
  }

}
