import {Component, Input} from '@angular/core';



@Component({
  selector: 'app-donneur',
  templateUrl: 'donneur.component.html'
})
export class DonneurComponent {

  @Input() listdonneurordreintitinput: string;
  @Input() listdonneurordrename2input: string;
  @Input() listdonneurordreprenom2input: string;
  @Input() listdonneurordreemail2input: string;
  @Input() listdonneurordretel2input: string;
  @Input() listdonneurordrefct2input: string;
  @Input() listdonneurordrename3input: string;
  @Input() listdonneurordreprenom3input: string;
  @Input() listdonneurordreemail3input: string;
  @Input() listdonneurordretel3input: string;
  @Input() listdonneurordrefct3input: string;
  @Input() listdonneurordrename4input: string;
  @Input() listdonneurordreprenom4input: string;
  @Input() listdonneurordreemail4input: string;
  @Input() listdonneurordretel4input: string;
  @Input() listdonneurordrefct4input: string;



  constructor() { }

}
