import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ListClientService} from '../services/list-client.service';

@Component({
  templateUrl: 'ajout-type.component.html'
})
export class AjoutTypeComponent implements OnInit {

  constructor(private listclientService: ListClientService,
              private router: Router) {
  }
  ngOnInit() {
  }
  onSubmit3(form: NgForm) {
    const type = form.value['type'];
    // this.listmaterielService.addMateriel(select1, marqueinput, modeleinput, matriinput);
    this.router.navigate(['/materiels/ajout-materiel']);
  }
}
