import { NgForm } from '@angular/forms';
import { ClienteService } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alugar',
  templateUrl: './alugar.component.html',
  styleUrls: ['./alugar.component.scss']
})
export class AlugarComponent implements OnInit {

  clientes: any = [];
  aluguel: any = [];
  params: any;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
  ) { }

  alugar(form: NgForm) {
    console.log(form.value);
  }

  getClientes() {
    this.clienteService.clientes()
    .subscribe(
      res => this.clientes = res,
      erro => console.error(erro)
    );
  }

  getAutomovel(idAutomovel) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => this.params = +res['idAutomovel']);
    this.getClientes();
  }

}
