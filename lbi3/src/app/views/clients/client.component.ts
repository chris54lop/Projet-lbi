import {Component, Input} from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html'
})
export class ClientComponent {

  @Input() clienthfetabl: string;
  @Input() clienthfaddr: string;
  @Input() clienthfville: string;
  @Input() clientselect7: string;
  @Input() clientnameinput: string;
  @Input() clientprenominput: string;
  @Input() clientemailinput: string;
  @Input() clienttelinput: string;
  @Input() clientfctinput: string;
  @Input() clientname1input: string;
  @Input() clientprenom1input: string;
  @Input() clientemail1input: string;
  @Input() clienttel1input: string;
  @Input() clientfct1input: string;



  constructor(private router: Router) { }

}
