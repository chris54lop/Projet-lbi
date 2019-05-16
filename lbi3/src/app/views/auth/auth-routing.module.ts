import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuthGuard} from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Matériels'
    },
    children: [
      {
        path: 'Dashboard',
        canActivate: [AuthGuard], // empêche l'utilisateur d'accéder à la page
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
