import {Component, Input} from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html'
})
export class ClientComponent {

  @Input() clientetabl: string;
  @Input() clientaddr: string;
  @Input() clientville: string;
  @Input() clientdonneur1: string;
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
