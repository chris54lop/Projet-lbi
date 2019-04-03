import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'list-technicien.component.html'
})
export class ListTechnicienComponent {

  constructor(private router: Router) {
  }
  onAjout() {
    this.router.navigate(['/techniciens/ajout-technicien']);
  }
}
