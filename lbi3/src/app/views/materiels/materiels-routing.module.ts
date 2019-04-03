import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutMaterielComponent } from './ajout-materiel.component';
import {ListMaterielComponent} from './list-materiel.component';
import {AjoutTypeComponent} from './ajout-type.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Matériels'
    },
    children: [
      {
        path: 'ajout-materiel',
        component: AjoutMaterielComponent,
        data: {
          title: 'Ajout matériel'
        }
      },
      {
        path: 'ajout-type',
        component: AjoutTypeComponent,
        data: {
          title: 'Ajout type'
        }
      },
      {
        path: 'list-materiel',
        component: ListMaterielComponent,
        data: {
          title: 'Liste matériel'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielsRoutingModule {}
