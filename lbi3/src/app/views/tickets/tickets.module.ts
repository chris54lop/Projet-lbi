// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {DemandeTicketComponent} from './demande-ticket.component';
import {ListTicketComponent} from './list-ticket.component';
import {TicketInstallComponent} from './ticket-install.component';
import {TicketIntervComponent} from './ticket-interv.component';
import {TicketsRoutingModule} from './tickets-routing.module';
import {ListTicketService} from '../services/list-ticket.service';
import {FormsModule} from '@angular/forms';
import {ListDemandeComponent} from './list-demande.component';
import {ListDemandeService} from '../services/list-demande.service';
import {DemandeComponent} from './demande.component';
import { SignaturePadModule} from 'angular2-signaturepad';
import {TicketComponent} from './ticket.component';
import {EditTicketComponent} from './edit-ticket.component';


@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
    SignaturePadModule
  ],
  declarations: [
    DemandeTicketComponent,
    ListTicketComponent,
    TicketInstallComponent,
    TicketIntervComponent,
    ListDemandeComponent,
    DemandeComponent,
    TicketComponent,
    EditTicketComponent
  ],
  providers: [
    ListTicketService,
    ListDemandeService
  ]
})
export class TicketsModule { }

