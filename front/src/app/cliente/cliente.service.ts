import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCADORA_API } from './../app.api';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(form) {
    return this.http.post(`${LOCADORA_API}cliente`, form);
  }

  deleteCliente(idCliente) {
    return this.http.delete(`${LOCADORA_API}cliente/${idCliente}`);
  }

  alteraCliente(idCliente, form) {
    return this.http.put(`${LOCADORA_API}cliente/${idCliente}`, form);
  }

  clienteById(idCliente) {
    return this.http.get(`${LOCADORA_API}cliente/${idCliente}`);
  }

  clientes() {
    return this.http.get(`${LOCADORA_API}cliente`);
  }

  adicionarTelefone(telefone) {
    return this.http.post(`${LOCADORA_API}telefone`, telefone);
  }

  deleteTelefone(idCliente, telefone) {
    return this.http.delete(`${LOCADORA_API}telefone/${idCliente}/${telefone}`);
  }

  adicionarEmail(email) {
    return this.http.post(`${LOCADORA_API}email`, email);
  }

  deleteEmail(idCliente, email) {
    return this.http.delete(`${LOCADORA_API}email/${idCliente}/${email}`);
  }

}
