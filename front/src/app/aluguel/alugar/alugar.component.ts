import { AluguelService } from './../aluguel.service';
import { NgForm } from '@angular/forms';
import { ClienteService } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarroService } from '../../carro/carro.service';

@Component({
  selector: 'app-alugar',
  templateUrl: './alugar.component.html',
  styleUrls: ['./alugar.component.scss']
})
export class AlugarComponent implements OnInit {

  clientes: any = [];
  aluguel: any = [];
  pagamento: any = [];
  carro: any;
  params: any;
  valorCarro = 0.0;
  valorAluguel = 0.0;

  constructor(
    private clienteService: ClienteService,
    private carroService: CarroService,
    private aluguelService: AluguelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  alugar(form: NgForm) {
    const envio: any = {};
    envio.id_cliente = form.value.id_cliente;
    envio.id_tipo_pag = form.value.id_tipo_pag;
    envio.renavam = this.params;
    envio.valor = this.valorAluguel;

    this.aluguelService.alugar(envio)
    .subscribe(
      res => this.router.navigate(['/aluguel']),
      erro => console.error(erro)
    );
  }

  getClientes() {
    this.clienteService.clientes()
    .subscribe(
      res => this.clientes = res,
      erro => console.error(erro)
    );
  }

  dias(valor) {
    this.valorAluguel = this.valorCarro * Number(valor);
  }

  getAutomovel(idAutomovel) {
    this.carroService.getCarrosId(idAutomovel)
    .subscribe(
      res => {
        this.carro = res[0];
        this.valorCarro = res[0].preco;
        this.valorAluguel = res[0].preco;
        this.aluguel.dias = 1;
      },
      erro => console.error(erro)
    );
  }

  getPagamento() {
    this.aluguelService.getPagamento()
    .subscribe(
      res => {
        this.pagamento = res;
        console.log(res);
      },
      erro => console.error(erro)
    );
  }


  ngOnInit() {
      this.activatedRoute.params.subscribe(res => this.params = +res['idAutomovel']);
      this.getAutomovel(this.params);
      this.getClientes();
      this.getPagamento();
  }

}
