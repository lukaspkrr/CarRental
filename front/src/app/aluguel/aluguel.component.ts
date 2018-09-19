import { Component, OnInit } from '@angular/core';
import { AluguelService } from './aluguel.service';

@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.scss']
})
export class AluguelComponent implements OnInit {

  veiculo: any = [];

  constructor(
    private aluguelService: AluguelService
  ) { }

  ngOnInit() {
    this.aluguelService.getAutomoveis()
    .subscribe(
      res => {
        console.log(res);
        this.veiculo = res;
      },
      erro => console.error(erro)
    );
  }

}
