// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AjoutMaterielComponent } from './ajout-materiel.component';
import { MaterielsRoutingModule } from './materiels-routing.module';
import {ListMaterielComponent} from './list-materiel.component';
import {ListMaterielService} from '../services/list-materiel.service';
import {FormsModule} from '@angular/forms';
import {AjoutTypeComponent} from './ajout-type.component';
import {MaterielComponent} from './materiel.component';
import {HttpClient, HttpHandler} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    MaterielsRoutingModule,
    FormsModule
  ],
  declarations: [
    AjoutMaterielComponent,
    ListMaterielComponent,
    AjoutTypeComponent,
    MaterielComponent
  ],
  providers: [
    ListMaterielService,
    HttpClient,
    HttpHandler
  ]
})
export class MaterielsModule { }





