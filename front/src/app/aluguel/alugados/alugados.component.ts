import { AluguelService } from './../aluguel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alugados',
  templateUrl: './alugados.component.html',
  styleUrls: ['./alugados.component.scss']
})
export class AlugadosComponent implements OnInit {

  alugueis: any = [];

  constructor(
    private aluguelService: AluguelService,
    private router: Router
  ) { }

  carroDevolvido(aluguel) {
    console.log(aluguel);
    this.aluguelService.devolucao({id_cliente: aluguel.id_cliente, renavam: aluguel.renavam})
    .subscribe(
      res => this.router.navigate(['/aluguel']),
      erro => console.error(erro)
    );
  }

  getAlugados() {
    this.aluguelService.alugados()
    .subscribe(
        res => this.alugueis = res,
        erro => console.error(erro)
      );
  }

  ngOnInit() {
    this.getAlugados();
  }

}
