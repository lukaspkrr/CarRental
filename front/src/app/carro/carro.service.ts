import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';

import { LOCADORA_API } from '../app.api';

@Injectable()
export class CarroService {

  constructor(
    private http: HttpClient
  ) { }

  postCarros(form) {
    return this.http.post(`${LOCADORA_API}registro_carro`, form)
    .map(res => res);
  }


}
