import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ExcelService} from '../services/excel.service';
import {Utilisateur} from './utilisateur';
import {ListUtilisateurService} from '../services/list-utilisateur.service';


@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: 'ajout-utilisateur.component.html'
})
export class AjoutUtilisateurComponent {

  error = '';
  success = '';

  utilisateur = new Utilisateur('', '' , '', '', '');


  constructor(private router: Router, private excelService: ExcelService,
              private listutilisateur: ListUtilisateurService) {
  }


  onSubmit() {

    this.router.navigate(['/utilisateur/list-utilisateur']);

    this.resetErrors();
    this.utilisateur = JSON.stringify(this.utilisateur);
    console.log(this.utilisateur);
    this.listutilisateur.saveUtilisateurToServer(this.utilisateur)
      .subscribe(
        (res: Utilisateur[]) => {
          // Update the list of materiel
          this.utilisateur = res;

          // Inform the user
          this.success = 'Created successfully';
          console.log(this.success);
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }


}


