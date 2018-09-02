import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioRoutingModule } from './funcionario.routing.module';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


@NgModule({
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    FormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
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
