import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Technicien} from './technicien';
import {ListTechnicienService} from '../services/list-technicien.service';

@Component({
  templateUrl: 'ajout-technicien.component.html'
})
export class AjoutTechnicienComponent {

  error = '';
  success = '';

  technicien = new Technicien('', '' , '');



  constructor(private router: Router,
              private listtechnicienService: ListTechnicienService) {
  }
  /*onSubmit3( form: NgForm) {
    const nomt = form.value['nomt'];
    const telx = form.value['telx'];
    const fctx = form.value['fctx'];
    this.router.navigate(['/techniciens/list-technicien']);
  }*/

  onSubmit3() {

    this.router.navigate(['/techniciens/list-technicien']);

    this.resetErrors();
    this.technicien = JSON.stringify(this.technicien);
    console.log(this.technicien);
    this.listtechnicienService.saveTechnicienToServer(this.technicien)
      .subscribe(
        (res: Technicien[]) => {
          // Update the list of materiel
          this.technicien = res;

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
