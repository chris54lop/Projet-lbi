import {Component, OnInit} from '@angular/core';
import {ListUtilisateurService} from '../services/list-utilisateur.service';
import {Utilisateur} from './utilisateur';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-edit-user',
  templateUrl: 'edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  utilisateurs: Utilisateur[];
  error = '';
  success = '';
  private subscription: Subscription;
  utilisateur = new Utilisateur('', '', '', '', '');

  constructor(private listutilisateurService: ListUtilisateurService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.utilisateur.name7 = params.name7;
      this.utilisateur.prenom5 = params.prenom5;
      this.utilisateur.niv = params.niv;
      this.utilisateur.login = params.login;
      this.utilisateur.password = params.password;
      this.utilisateur.id_user = params.id_user;

    })
  }

  updateUtilisateur(name7) {
    this.resetErrors();
    //this.utilisateur = JSON.stringify(this.utilisateur);
    console.log(name7);
    //this.listutilisateurService.updateUser({ name7: name7, prenom5: prenom5, niv: niv, login: login, password: password})
    this.listutilisateurService.updateUser(this.utilisateur)
      .subscribe(
        (res) => {
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
    console.log(this.utilisateur);
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }

}
