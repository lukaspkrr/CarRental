
import { CarroComponent } from './carro/carro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AluguelComponent } from './aluguel/aluguel.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aluguel', component: AluguelComponent},
  { path: 'carro', component: CarroComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'funcionario', component: FuncionarioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

