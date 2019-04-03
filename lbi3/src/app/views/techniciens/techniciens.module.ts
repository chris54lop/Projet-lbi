// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ListTechnicienComponent} from './list-technicien.component';
import {TechniciensRoutingModule} from './techniciens-routing';
import {AjoutTechnicienComponent} from './ajout-technicien.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TechniciensRoutingModule
  ],
  declarations: [
    ListTechnicienComponent,
    AjoutTechnicienComponent
  ]
})
export class TechniciensModule { }





