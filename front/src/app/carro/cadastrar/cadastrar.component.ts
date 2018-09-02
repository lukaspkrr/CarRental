import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

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

  constructor(private carroService: CarroService) { }

  ngOnInit() {
  }

  salvarCarro(form) {
    console.log(form.value);
    this.carroService.postCarros(form.value).subscribe(
      res => {
        console.log('sucesso');
      },
      error => {
        console.log('erro');
      }
    );
  }

}
