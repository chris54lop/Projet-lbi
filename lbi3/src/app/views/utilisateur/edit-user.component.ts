import {Component, OnInit} from '@angular/core';
import {ListUtilisateurService} from '../services/list-utilisateur.service';
import {Utilisateur} from './utilisateur';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-edit-user',
  templateUrl: 'edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  utilisateurs: Utilisateur[];
  error = '';
  success = '';
  private subscription: Subscription;


  constructor(private listutilisateurService: ListUtilisateurService,
              private route: ActivatedRoute) {
    // this.subscription = this.route.queryParams.subscribe(
    //   params => {
    //     this.utilisateur[1] = params['utilisateurs'];
    //     this.utilisateur[2] = params['utilisateurs'];
    //   }
    // );
  }
  name7: string;
  prenom5: string;


  ngOnInit() {
   /* const id = this.route.snapshot.params['id'];
    this.name7 = this.listutilisateurService.getUtilisateurById(+id).name7;
    this.prenom5 = this.listutilisateurService.getUtilisateurById(+id).prenom5;*/
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
