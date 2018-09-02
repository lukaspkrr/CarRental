import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarroService } from './carro.service';
import { CarroRoutingModule } from './carro.routing.module';

import { CarroComponent } from './carro.component';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    CarroRoutingModule,
    FormsModule
  ],
  declarations: [
   CarroComponent,
   CadastrarComponent,
   ListarComponent
  ],
  providers: [
    CarroService
  ]

})
export class CarroModule { }
