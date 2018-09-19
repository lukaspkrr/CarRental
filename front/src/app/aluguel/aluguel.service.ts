import { LOCADORA_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AluguelService {

  constructor(
    private http: HttpClient
  ) { }

  getAutomoveis() {
    return this.http.get(`${LOCADORA_API}veiculo`);
  }

  getPagamento() {
    return this.http.get(`${LOCADORA_API}tipoPagamento`);
  }

  alugar(form) {
    return this.http.post(`${LOCADORA_API}aluguel`, form);
  }

  alugados() {
    return this.http.get(`${LOCADORA_API}aluguel`);
  }

  devolucao(form) {
    return this.http.post(`${LOCADORA_API}devolucao`, form);
  }

}
