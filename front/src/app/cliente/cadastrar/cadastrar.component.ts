import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
