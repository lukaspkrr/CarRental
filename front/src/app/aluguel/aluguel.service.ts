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

}
