import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AluguelComponent } from './aluguel.component';


const AluguelRoutes: Routes = [
  { path: '', component: AluguelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(AluguelRoutes)],
  exports: [RouterModule]
})
export class AluguelRoutingModule {}
