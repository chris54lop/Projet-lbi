import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.component.html'
})
export class TicketComponent {

  constructor(private router: Router) { }



  @Input() listticketfiche: string;
@Input() listticketselect17: string;
@Input() listticketselect2: string;
@Input() listticketselect3: string;
@Input() listtickethfaddr: string;
@Input() listticketvilleinput: string;
@Input() listticketinfoinput: string;
@Input() listtickettel5input: string;
@Input() listtickettel8input: string;
@Input() listticketresponsinput: string;
@Input() listticketselect4: string;
@Input() listtickettechnicien1: string;
@Input() listtickettechnicien2: string;
@Input() listtickettechnicien3: string;
@Input() listtickettechnicien4: string;
@Input() listticketdateinput: string;
@Input() listtickettimeinput: string;
@Input() listticketdate1input: string;
@Input() listticketselect18: string;
@Input() listticketmatri1input: string;
@Input() listtickettextarea1input: string;
@Input() listtickettextarea2input: string;
@Input() listticketforfaitinput: string;
@Input() listticketquan1input: string;
@Input() listticketoeuvreinput: string;
@Input() listticketquan2input: string;
@Input() listticketpieceinput: string;
@Input() listticketquan3input: string;
@Input() listticketname5input: string;
@Input() listtickettextarea3input: string;
@Input() listtickettime2input: string;
@Input() listtickettime3input: string;
@Input() listtickettextarea4input: string;
@Input() listticketfileinput: string;

@Input() listticketselect19: string;
@Input() listticketselect8: string;
@Input() listticketselect9: string;
@Input() listticketaddr1input: string;
@Input() listticketville1input: string;
@Input() listticketinfo1input: string;
@Input() listtickettel7input: string;
@Input() listtickettel6input: string;
@Input() listticketrespons1input: string;
@Input() listticketselect20: string;
@Input() listtickettechnicien5: string;
@Input() listtickettechnicien6: string;
@Input() listtickettechnicien7: string;
@Input() listtickettechnicien8: string;
@Input() listticketdate2input: string;
@Input() listtickettime5input: string;
@Input() listticketdate3input: string;
@Input() listticketselect10: string;
@Input() listticketmatri2input: string;
@Input() listtickettextarea5input: string;
@Input() listtickettextarea6input: string;
@Input() listticketforfait1input: string;
@Input() listticketquan4input: string;
@Input() listticketoeuvre1input: string;
@Input() listticketquan5input: string;
@Input() listticketpiece1input: string;
@Input() listticketquan6input: string;
@Input() listticketname6input: string;
@Input() listtickettextarea7input: string;
@Input() listtickettime6input: string;
@Input() listtickettime7input: string;
@Input() listtickettextarea8input: string;
@Input() listticketfileinput1: string;

}
