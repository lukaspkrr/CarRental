import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss', '../../app.component.scss']
})
export class CadastrarComponent implements OnInit {

  carro = {
    modelo: '',
    placa: '',
    ano: '',
    renavam: ''
  };


  constructor() { }

  ngOnInit() {
  }

}
