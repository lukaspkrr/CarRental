import { Component, OnInit } from '@angular/core';
import { CarroService } from './carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent implements OnInit {
  carros: any;

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit() {
    this.getCarros();
  }

  getCarros() {
    this.carroService.getCarros().subscribe(
      res => {
        this.carros = res;
        console.log(this.carros);
      }
    );
  }

}
