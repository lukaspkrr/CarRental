
import { CarroComponent } from './carro/carro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AluguelComponent } from './aluguel/aluguel.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aluguel', component: AluguelComponent, loadChildren: 'app/aluguel/aluguel.module#AluguelModule' },
  { path: 'carro', component: CarroComponent, loadChildren: 'app/carro/carro.module#CarroModule' },
  { path: 'cliente', component: ClienteComponent, loadChildren: 'app/cliente/cliente.module#ClienteModule'},
  { path: 'funcionario', component: FuncionarioComponent, loadChildren: 'app/funcionario/funcionario.module#FuncionarioModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

