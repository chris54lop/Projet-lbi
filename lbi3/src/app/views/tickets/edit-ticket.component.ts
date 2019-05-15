import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListTicketService} from '../services/list-ticket.service';
import {Ticket} from './ticket';



@Component({
  selector: 'app-edit-ticket',
  templateUrl: 'edit-ticket.component.html'
})
export class EditTicketComponent implements OnInit {

  error = '';
  success = '';
  ticket = new Ticket('', '', '', '', '', '',
    '', '', '', '', '', '',
    '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '');

  constructor(private listticketService: ListTicketService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.ticket.etat2 = params.name7;
      this.ticket.donneur4 = params.name7;
      this.ticket.client4 = params.name7;
      this.ticket.addr1input = params.name7;
      this.ticket.ville1input = params.name7;
      this.ticket.infoinput = params.name7;
      this.ticket.telfixe1 = params.name7;
      this.ticket.telportable1 = params.name7;
      this.ticket.responsinput = params.name7;
      this.ticket.typecontrat1 = params.name7;
      this.ticket.technicien5 = params.technicien5;
      this.ticket.technicien6 = params.technicien6;
      this.ticket.technicien7 = params.technicien7;
      this.ticket.technicien8 = params.technicien8;
      this.ticket.dateappel3 = params.name7;
      this.ticket.hinter = params.name7;
      this.ticket.dinterv = params.name7;
      this.ticket.typemat5 = params.name7;
      this.ticket.matri2input = params.name7;
      this.ticket.descripanne = params.name7;
      this.ticket.descritravail1 = params.name7;
      this.ticket.forfaitinput = params.name7;
      this.ticket.quan1input = params.name7;
      this.ticket.oeuvreinput = params.name7;
      this.ticket.quan2input = params.name7;
      this.ticket.pieceinput = params.name7;
      this.ticket.quan3input = params.name7;
      this.ticket.harrive = params.name7;
      this.ticket.hdep = params.name7;
      this.ticket.rq = params.name7;
      this.ticket.fiche = params.name7;
    })
  }

  update() {
    this.resetErrors();
    this.listticketService.updateTicket(this.ticket)
      .subscribe(
        (res) => {
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
    console.log(this.ticket);
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }

}
