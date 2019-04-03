import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'ajout-technicien.component.html'
})
export class AjoutTechnicienComponent {

  constructor(private router: Router) {
  }
  onSubmit3( form: NgForm) {
    const select16 = form.value['select16'];
    const select17 = form.value['select17'];
    const select2 = form.value['select2'];
    this.router.navigate(['/techniciens/list-technicien']);
  }
}
