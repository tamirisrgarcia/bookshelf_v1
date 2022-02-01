import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblioteconomiaComponent } from './biblioteconomia/biblioteconomia.component';
import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { BiblioteconomiaRoutingModule } from './biblioteconomia-routing.module';



@NgModule({
  declarations: [
    BiblioteconomiaComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppCompartilhadoModule,
    BiblioteconomiaRoutingModule,
  ]
})
export class BiblioteconomiaModule { }
