import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.component.html'
})
export class TicketComponent {

  constructor(private router: Router) { }


  @Input() listticketfiche: string;
@Input() listticketetat1: string;
@Input() listticketdonneur3: string;
@Input() listticketclient2: string;
@Input() listtickethfaddr: string;
@Input() listticketvilleinput: string;
@Input() listticketinfoinput: string;
@Input() listtickettelfixe: string;
@Input() listtickettelportable: string;
@Input() listticketresponsinput: string;
@Input() listtickettypecontrat: string;
@Input() listtickettechnicien1: string;
@Input() listtickettechnicien2: string;
@Input() listtickettechnicien3: string;
@Input() listtickettechnicien4: string;
@Input() listticketdateappel2: string;
@Input() listticketheureinterv: string;
@Input() listticketdateinterv: string;
@Input() listtickettypemat4: string;
@Input() listticketmatri1input: string;
@Input() listticketdescrimat: string;
@Input() listticketdescritravail: string;
@Input() listticketforfaitinput: string;
@Input() listticketquan1input: string;
@Input() listticketoeuvreinput: string;
@Input() listticketquan2input: string;
@Input() listticketpieceinput: string;
@Input() listticketquan3input: string;
@Input() listticketname5input: string;
@Input() listtickettextarea3input: string;
@Input() listticketharrive: string;
@Input() listtickethdep: string;
@Input() listticketrq: string;
@Input() listticketfileinput: string;

@Input() listticketetat2: string;
@Input() listticketdonneur4: string;
@Input() listticketclient4: string;
@Input() listticketaddr1input: string;
@Input() listticketville1input: string;
@Input() listticketinfo1input: string;
@Input() listtickettelfixe1: string;
@Input() listtickettelportable1: string;
@Input() listticketrespons1input: string;
@Input() listtickettypecontrat1: string;
@Input() listtickettechnicien5: string;
@Input() listtickettechnicien6: string;
@Input() listtickettechnicien7: string;
@Input() listtickettechnicien8: string;
@Input() listticketdateappel3: string;
@Input() listtickethinter: string;
@Input() listticketdinterv: string;
@Input() listtickettypemat5: string;
@Input() listticketmatri2input: string;
@Input() listticketdescripanne: string;
@Input() listticketdescritravail1: string;
@Input() listticketforfait1input: string;
@Input() listticketquan4input: string;
@Input() listticketoeuvre1input: string;
@Input() listticketquan5input: string;
@Input() listticketpiece1input: string;
@Input() listticketquan6input: string;
@Input() listticketname6input: string;
@Input() listtickettextarea7input: string;
@Input() listticketharrive1: string;
@Input() listtickethdep1: string;
@Input() listticketrq1: string;
@Input() listticketfileinput1: string;

}
