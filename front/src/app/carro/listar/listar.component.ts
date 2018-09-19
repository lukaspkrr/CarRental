import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  carro: any;
  params: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carroService: CarroService
  ) { }

  ngOnInit() {
  this.activatedRoute.params.subscribe(res => this.params = +res['id'] );
  this.carroService.getCarrosId(this.params).subscribe(
    res => {
      this.carro = res,
      console.log(this.carro);
    },
    error => {
      console.log(error);
    }
  );
  }

}
