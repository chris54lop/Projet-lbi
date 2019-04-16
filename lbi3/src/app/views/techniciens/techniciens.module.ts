// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ListTechnicienComponent} from './list-technicien.component';
import {TechniciensRoutingModule} from './techniciens-routing.module';
import {AjoutTechnicienComponent} from './ajout-technicien.component';
import {FormsModule} from '@angular/forms';
import {ListMaterielService} from '../services/list-materiel.service';
import {ListTechnicienService} from '../services/list-technicien.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TechniciensRoutingModule
  ],
  declarations: [
    ListTechnicienComponent,
    AjoutTechnicienComponent
  ],
  providers: [
    ListTechnicienService,

  ]
})
export class TechniciensModule { }





