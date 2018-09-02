
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AluguelComponent } from './aluguel/aluguel.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'aluguel', component: AluguelComponent },
  { path: 'carro', loadChildren: 'app/carro/carro.module#CarroModule' },
  { path: 'cliente',  loadChildren: 'app/cliente/cliente.module#ClienteModule' },
  { path: 'funcionario',  loadChildren: 'app/funcionario/funcionario.module#FuncionarioModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

