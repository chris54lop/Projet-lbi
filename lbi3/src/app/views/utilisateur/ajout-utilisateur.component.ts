import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ExcelService} from '../services/excel.service';


@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: 'ajout-utilisateur.component.html'
})
export class AjoutUtilisateurComponent {

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
  select14: string;
  password: string;

  constructor(private router: Router, private excelService: ExcelService) {
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name7 = form.value['name7'];
    const prenom5 = form.value['prenom5'];
    const select14 = form.value['select14'];
    const password = form.value['password'];
    this.router.navigate(['/utilisateur/list-utilisateur']);


  }

}


