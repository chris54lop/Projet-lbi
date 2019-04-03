import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutDonneurOrdreComponent } from './ajout-donneur-ordre.component';
import { AjoutClientComponent} from './ajout-client.component';
import {ListClientComponent} from './list-client.component';
import {ListDonneurOrdreComponent} from './list-donneur-ordre.component';
import {EditClientComponent} from './edit-client.component';
import {EditDonneurOrdreComponent} from './edit-donneur-ordre.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clients'
    },
    children: [
      {
        path: 'ajout-client',
        component: AjoutClientComponent,
        data: {
          title: 'Ajout client'
        }
      },
      {
        path: 'ajout-donneur-ordre',
        component: AjoutDonneurOrdreComponent,
        data: {
          title: 'Ajout donneur d\'ordre'
        }
      },
      {
        path: 'list-client',
        component: ListClientComponent,
        data: {
          title: 'Liste clients'
        },
      },
      {
        path: 'list-donneur-ordre',
        component: ListDonneurOrdreComponent,
        data: {
          title: 'Liste donneur d\'ordre'
        }
      },
      {
        path: 'list-client/modification',
        component: EditClientComponent,
        data: {
          title: 'Modification sur le client'
        },
      },
      {
        path: 'list-donneur-ordre/modification',
        component: EditDonneurOrdreComponent,
        data: {
          title: 'Modification d\'un donneur d\' ordre'
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
