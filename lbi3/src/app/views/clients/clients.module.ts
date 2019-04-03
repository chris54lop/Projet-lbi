// Angular
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { AjoutDonneurOrdreComponent} from './ajout-donneur-ordre.component';
import { AjoutClientComponent} from './ajout-client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import {ListClientComponent} from './list-client.component';
import {ListDonneurOrdreComponent} from './list-donneur-ordre.component';
import {EditClientComponent} from './edit-client.component';
import {EditDonneurOrdreComponent} from './edit-donneur-ordre.component';
import {ListClientService} from '../services/list-client.service';
import {FormsModule} from '@angular/forms';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';
import {ClientComponent} from './client.component';
import {DonneurComponent} from './donneur.component';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ],
  declarations: [
    AjoutClientComponent,
    AjoutDonneurOrdreComponent,
    ListClientComponent,
    ListDonneurOrdreComponent,
    EditClientComponent,
    EditDonneurOrdreComponent,
    ClientComponent,
    DonneurComponent

  ],
  providers: [
    ListClientService,
    ListDonneurOrdreService],
})
export class ClientsModule { }

