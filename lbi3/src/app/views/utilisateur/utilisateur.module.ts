// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AjoutUtilisateurComponent} from './ajout-utilisateur.component';
import {ListUtilisateurComponent} from './list-utilisateur.component';
import {UtilisateurRoutingModule} from './utilisateur-routing.module';
import {ExcelService} from '../services/excel.service';
import {MonCompteComponent} from './mon-compte.component';



@NgModule({
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    FormsModule,
  ],
  declarations: [
    AjoutUtilisateurComponent,
    ListUtilisateurComponent,
    MonCompteComponent

  ],
  providers: [
  ExcelService
  ]
})
export class UtilisateurModule { }

