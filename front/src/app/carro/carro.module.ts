import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroRoutingModule } from './carro.routing.module';

import { CarroComponent } from './carro.component';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    CarroRoutingModule
  ],
  declarations: [
   CarroComponent,
   CadastrarComponent,
   ListarComponent
  ]

})
export class CarroModule { }
