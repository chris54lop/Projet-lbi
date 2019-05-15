import {Component, OnInit} from '@angular/core';
import {Utilisateur} from './utilisateur';
import {ListUtilisateurService} from '../services/list-utilisateur.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: 'mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {



  constructor( private listutilisateurService: ListUtilisateurService) { }

  utilisateurs: Utilisateur[];
  error = '';
  success = '';
  utilisateur = new Utilisateur('', '' , '' , '' , '' );


  ngOnInit() {
    this.getUtilisateur();
  }

  getUtilisateur(): void {
    this.listutilisateurService.getUtilisateurFromServer().subscribe(
      (res: Utilisateur[]) => {
        this.utilisateurs = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );

  }
  private resetErrors() {
    this.success = '';
    this.error   = '';
  }
}
