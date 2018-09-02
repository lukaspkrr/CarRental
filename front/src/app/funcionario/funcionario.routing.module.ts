import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FuncionarioComponent } from './funcionario.component';


const funcionarioRoutes: Routes = [
  { path: '', component: FuncionarioComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'listar/:id', component: ListarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(funcionarioRoutes)],
  exports: [RouterModule]
})

export class FuncionarioRoutingModule {}

