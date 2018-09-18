
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aluguel', loadChildren: 'app/aluguel/aluguel.module#AluguelModule' },
  { path: 'carro', loadChildren: 'app/carro/carro.module#CarroModule' },
  { path: 'cliente',  loadChildren: 'app/cliente/cliente.module#ClienteModule' },
  { path: 'funcionario',  loadChildren: 'app/funcionario/funcionario.module#FuncionarioModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

