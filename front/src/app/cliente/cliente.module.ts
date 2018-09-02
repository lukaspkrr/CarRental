import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteComponent } from './cliente.component';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClienteComponent,
    CadastrarComponent,
    ListarComponent
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule { }
