import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-materiel',
  templateUrl: 'materiel.component.html'
})
export class MaterielComponent {

  @Input() listmaterieltypemat1: string;
  @Input() listmaterielmarqueinput: string;
  @Input() listmaterielmodeleinput: string;
  @Input() listmaterielmatriinput: string;
  @Input() listmaterieldonneur2: string;
  @Input() listmaterielclient1: string;
  @Input() listmaterieldategarantie1: string;
  @Input() listmaterieldateachat1: string;

  constructor() {
  }
}
