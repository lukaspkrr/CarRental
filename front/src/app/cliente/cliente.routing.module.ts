import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ClienteComponent } from './cliente.component';


const clienteRoutes: Routes = [
  { path: '', component: ClienteComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'edit/:id', component: CadastrarComponent },
  { path: 'listar/:id', component: ListarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})

export class ClienteRoutingModule {}
