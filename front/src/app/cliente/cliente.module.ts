import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteComponent } from './cliente.component';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ClienteService } from './cliente.service';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ],
  declarations: [
    ClienteComponent,
    CadastrarComponent,
    ListarComponent
  ],
  exports: [
    ClienteComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
