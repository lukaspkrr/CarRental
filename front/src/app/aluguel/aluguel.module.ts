import { AlugarComponent } from './alugar/alugar.component';
import { AluguelComponent } from './aluguel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluguelRoutingModule } from './aluguel.routing.module';
import { MaterializeModule } from '../../../node_modules/angular2-materialize';
import { FormsModule } from '@angular/forms';
import { AluguelService } from './aluguel.service';
import { ClienteService } from '../cliente/cliente.service';

@NgModule({
  imports: [
    CommonModule,
    AluguelRoutingModule,
    MaterializeModule,
    FormsModule
  ],
  declarations: [
    AluguelComponent,
    AlugarComponent
  ],
  providers: [
    AluguelService,
    ClienteService
  ]
})
export class AluguelModule { }
