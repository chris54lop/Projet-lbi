import {Component, OnInit} from '@angular/core';
import {ListUtilisateurService} from '../services/list-utilisateur.service';
import {Utilisateur} from './utilisateur';


@Component({
  selector: 'app-edit-user',
  templateUrl: 'edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  utilisateurs: Utilisateur[];
  error = '';
  success = '';

  utilisateur = new Utilisateur('', '', '', '' , '' );

  constructor(private listutilisateurService: ListUtilisateurService) {
  }

  ngOnInit() {
  }

  updateUtilisateur(name7, prenom5, niv, login, password, id) {
    this.resetErrors();
    this.listutilisateurService.updateUser({ name7: name7.value, prenom5: prenom5.value, niv: niv.value, login: login.value, password: password.value, id: +id})
      .subscribe(
        (res) => {
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }

}
