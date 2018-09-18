import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCADORA_API } from './../app.api';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(form) {
    return this.http.post(`${LOCADORA_API}cliente`, form);
  }

}
