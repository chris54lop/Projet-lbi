import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemandeTicketComponent} from './demande-ticket.component';
import {ListTicketComponent} from './list-ticket.component';
import {TicketInstallComponent} from './ticket-install.component';
import {TicketIntervComponent} from './ticket-interv.component';
import {ListDemandeComponent} from './list-demande.component';
import {EditTicketComponent} from './edit-ticket.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tickets'
    },
    children: [
      {
        path: 'demande-ticket',
        component: DemandeTicketComponent,
        data: {
          title: 'Demande de ticket'
        }

      },
      {
        path: 'list-demande',
        component: ListDemandeComponent,
        data: {
          title: 'Liste de demandes'
        }
      },
      {
        path: 'list-ticket',
        component: ListTicketComponent,
        data: {
          title: 'Liste des tickets'
        }
      },
      {
        path: 'ticket-install',
        component: TicketInstallComponent,
        data: {
          title: 'Tickets d\' installation'
        }
      },
      {
        path: 'ticket-interv',
        component: TicketIntervComponent,
        data: {
          title: 'Tickets d\' intervention'
        }
      },
      {
        path: 'edit-ticket',
        component: EditTicketComponent,
        data: {
          title: 'Modification ticket'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
