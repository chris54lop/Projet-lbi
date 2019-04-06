import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ListMaterielService} from '../services/list-materiel.service';

import {Type} from './type';
import {Materiel} from './materiel';

@Component({
  templateUrl: 'ajout-type.component.html'
})
export class AjoutTypeComponent implements OnInit {

  error = '';
  success = '';

  type = new Type('');


  constructor(private listmaterielService: ListMaterielService,
              private router: Router) {
  }
  ngOnInit() {
  }
  /*onSubmit3(form: NgForm) {
    const typemat2 = form.value['typemat2'];
    // this.listmaterielService.addMateriel(select1, marqueinput, modeleinput, matriinput);
    this.router.navigate(['/materiels/ajout-materiel']);
  }*/

  onSubmit3() {

    this.router.navigate(['/materiels/ajout-materiel']);

    this.resetErrors();
    this.type = JSON.stringify(this.type);
    console.log(this.type);
    this.listmaterielService.saveTypeToServer(this.type)
      .subscribe(
        (res: Type[]) => {
          // Update the list of materiel
          this.type = res;

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
