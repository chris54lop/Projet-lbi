import {Component, OnInit} from '@angular/core';
import {ListUtilisateurService} from '../services/list-utilisateur.service';
import {Utilisateur} from './utilisateur';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-utilisateur',
  templateUrl: 'list-utilisateur.component.html'
})
export class ListUtilisateurComponent implements OnInit {



  constructor( private listutilisateurService: ListUtilisateurService,
               private router: Router) { }


  utilisateurs: Utilisateur[];
  error = '';
  success = '';

  utilisateur = new Utilisateur('', '' , '' , '' , '' );

  ngOnInit() {
    this.getUtilisateur();
  }

  sendTo() {
    this.router.navigate(['utilisateur/edit-user'],
      { queryParams : {'utilisateur' : this.utilisateur}});

  }

  getUtilisateur(): void {
    this.listutilisateurService.getUtilisateurFromServer().subscribe(
      (res: Utilisateur[]) => {
        this.utilisateur = res;
        console.log(this.utilisateur);
      },
      (err) => {
        this.error = err;
      }
    );

  }

  deleteUser(id) {
    this.resetErrors();

    this.listutilisateurService.delete(+id)
      .subscribe(
        (res: Utilisateur[]) => {
          this.utilisateurs = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }
}

