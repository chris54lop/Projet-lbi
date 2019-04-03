import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatComponent} from './stat.component';




const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Statistiques'
    },
    children: [
      {
        path: 'export',
        component: StatComponent,
        data: {
          title: 'Exportation'
        }

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatRoutingModule {}
