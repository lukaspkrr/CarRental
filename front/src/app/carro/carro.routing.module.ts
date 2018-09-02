import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { CarroComponent } from './carro.component';


const CarroRoutes: Routes = [
  { path: '', component: CarroComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'listar/:id', component: ListarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(CarroRoutes)],
  exports: [RouterModule]
})

export class CarroRoutingModule {}
