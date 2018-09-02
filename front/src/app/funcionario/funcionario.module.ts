import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioRoutingModule } from './funcionario.routing.module';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ],
  declarations: [
    FuncionarioComponent,
    CadastrarComponent,
    ListarComponent
  ],
  exports: [
    FuncionarioComponent
  ]
})
export class FuncionarioModule { }
