import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { LOCADORA_API } from '../app.api';

@Injectable()
export class CarroService {

  constructor(
    private http: HttpClient
  ) { }

  postCarros(form) {
    return this.http.post(`${LOCADORA_API}registro_carro`, form);
  }

  getCarros() {
    return this.http.get(`${LOCADORA_API}veiculo`);
  }
  getCarrosId(renavam) {
    return this.http.get(`${LOCADORA_API}veiculo/${renavam}`);
  }


}
