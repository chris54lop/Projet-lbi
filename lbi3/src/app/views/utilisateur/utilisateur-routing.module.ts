import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjoutUtilisateurComponent} from './ajout-utilisateur.component';
import {ListUtilisateurComponent} from './list-utilisateur.component';
import {MonCompteComponent} from './mon-compte.component';
import {EditUserComponent} from './edit-user.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Utilisateurs'
    },
    children: [
      {
        path: 'ajout-utilisateur',
        component: AjoutUtilisateurComponent,
        data: {
          title: 'Ajout d\'un utilisateur'
        }

      },
      {
        path: 'list-utilisateur',
        component: ListUtilisateurComponent,
        data: {
          title: 'Liste d\'utilisateurs'
        }
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
        data: {
          title: 'Modifier utilisateur'
        }
      },
      {
        path: 'mon-compte',
        component: MonCompteComponent,
        data: {
          title: 'Mon compte'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule {}
