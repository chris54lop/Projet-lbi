import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/auth/login.component';
import {AuthGuard} from './views/services/auth-guard.service';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'clients',
        canActivate: [AuthGuard],
        loadChildren: './views/clients/clients.module#ClientsModule'
      },
      {
        path: 'materiels',
        canActivate: [AuthGuard],
        loadChildren: './views/materiels/materiels.module#MaterielsModule'
      },
      {
        path: 'tickets',
        canActivate: [AuthGuard],
        loadChildren: './views/tickets/tickets.module#TicketsModule'
      },
      {
        path: 'techniciens',
        canActivate: [AuthGuard],
        loadChildren: './views/techniciens/techniciens.module#TechniciensModule'
      },
      {
        path: 'utilisateur',
        canActivate: [AuthGuard],
        loadChildren: './views/utilisateur/utilisateur.module#UtilisateurModule'
      },
      {
        path: 'stat',
        canActivate: [AuthGuard],
        loadChildren: './views/stat/stat.module#StatModule'
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
