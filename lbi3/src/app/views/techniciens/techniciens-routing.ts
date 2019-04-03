import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTechnicienComponent} from './list-technicien.component';
import {AjoutTechnicienComponent} from './ajout-technicien.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Techniciens'
    },
    children: [
      {
        path: 'list-technicien',
        component: ListTechnicienComponent,
        data: {
          title: 'Liste technicien'
        }
      },
      {
        path: 'ajout-technicien',
        component: AjoutTechnicienComponent,
        data: {
          title: 'Ajout technicien'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechniciensRoutingModule {}
