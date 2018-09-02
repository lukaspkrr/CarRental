import { AluguelComponent } from './aluguel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluguelRoutingModule } from './aluguel.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AluguelRoutingModule
  ],
  declarations: [
    AluguelComponent
  ],
  exports: [
    AluguelComponent
  ]
})
export class AluguelModule { }
