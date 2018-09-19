import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes: any = [];

  constructor(private clienteService: ClienteService) { }

  deletarCliente(idCliente) {
    this.clienteService.deleteCliente(idCliente)
    .subscribe(
      res => this.getClientes(),
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

  ngOnInit() {
    this.getClientes();
  }

}
