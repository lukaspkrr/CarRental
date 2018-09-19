import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AluguelComponent } from './aluguel.component';
import { AlugarComponent } from './alugar/alugar.component';


const AluguelRoutes: Routes = [
  { path: '', component: AluguelComponent },
  { path: 'alugar/:idAutomovel', component: AlugarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(AluguelRoutes)],
  exports: [RouterModule]
})
export class AluguelRoutingModule {}
