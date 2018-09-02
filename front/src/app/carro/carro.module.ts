import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroComponent } from './carro.component';
import { CarroRoutingModule } from './carro.routing.module';
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
  ],
  exports: [
   CarroComponent
  ]
})
export class CarroModule { }
