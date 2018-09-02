import { AluguelComponent } from './aluguel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluguelRoutingModule } from './aluguel.routing.module';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { MaterializeModule } from '../../../node_modules/angular2-materialize';

@NgModule({
  imports: [
    CommonModule,
    AluguelRoutingModule,
    BrowserModule,
    MaterializeModule,
  ],
  declarations: [
    AluguelComponent
  ],
  exports: [
    AluguelComponent
  ]
})
export class AluguelModule { }
