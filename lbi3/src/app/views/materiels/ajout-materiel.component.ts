import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ListMaterielService} from '../services/list-materiel.service';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'ajout-materiel.component.html'
})
export class AjoutMaterielComponent implements OnInit {

  constructor(private listmaterielService: ListMaterielService,
              private router: Router) {
  }
  ngOnInit() {
  }
  onSubmit2(form: NgForm) {
    const select1 = form.value['select1'];
    const marqueinput = form.value['marqueinput'];
    const modeleinput = form.value['modeleinput'];
    const matriinput = form.value['matriinput'];
    const select21 = form.value['select21'];
    const select22 = form.value['select22'];
    const date4 = form.value['date4'];
    const date3 = form.value['date3'];
    this.listmaterielService.addMateriel(select1, marqueinput, modeleinput, matriinput, select21, select22, date4, date3);
    this.router.navigate(['/materiels/list-materiel']);
  }
}
