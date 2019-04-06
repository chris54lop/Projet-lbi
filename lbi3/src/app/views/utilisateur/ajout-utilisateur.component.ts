import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ExcelService} from '../services/excel.service';
import {Utilisateur} from './utilisateur';
import {Technicien} from '../techniciens/technicien';
import {ListUtilisateurService} from '../services/list-utilisateur.service';


@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: 'ajout-utilisateur.component.html'
})
export class AjoutUtilisateurComponent {

  error = '';
  success = '';

  utilisateur = new Utilisateur('', '' , '', '', '');


  name = 'Angular 6';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
    {
      eid: 'e102',
      ename: 'ram',
      esal: 2000
    },
    {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000
    }];

  name7: string;
  prenom5: string;
  niv: string;
  password: string;

  constructor(private router: Router, private excelService: ExcelService,
              private listutilisateur: ListUtilisateurService) {
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  /*onSubmit(form: NgForm) {
    console.log(form.value);
    const name7 = form.value['name7'];
    const prenom5 = form.value['prenom5'];
    const niv = form.value['niv'];
    const password = form.value['password'];
    this.router.navigate(['/utilisateur/list-utilisateur']);
  }*/

  onSubmit() {

    this.router.navigate(['/utilisateur/list-utilisateur']);

    this.resetErrors();
    this.utilisateur = JSON.stringify(this.utilisateur);
    console.log(this.utilisateur);
    this.listutilisateur.saveUtilisateurToServer(this.utilisateur)
      .subscribe(
        (res: Technicien[]) => {
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


