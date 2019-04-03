import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-materiel',
  templateUrl: 'materiel.component.html'
})
export class MaterielComponent {

  @Input() listmaterielselect1: string;
  @Input() listmaterielmarqueinput: string;
  @Input() listmaterielmodeleinput: string;
  @Input() listmaterielmatriinput: string;
  @Input() listmaterielselect21: string;
  @Input() listmaterielselect22: string;
  @Input() listmaterieldate4: string;
  @Input() listmaterieldate3: string;

  constructor() {
  }
}
