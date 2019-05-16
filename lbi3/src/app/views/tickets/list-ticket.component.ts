import {Component, OnInit} from '@angular/core';
import {ListTicketService} from '../services/list-ticket.service';
import {Ticket} from './ticket';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-ticket',
  templateUrl: 'list-ticket.component.html'
})
export class ListTicketComponent implements OnInit {

  constructor( private listticketService: ListTicketService,
               private router: Router) { }

  tickets: Ticket[];
  error = '';
  success = '';
  ticket = new Ticket('', '' , '' , '' , '' , '',
    '', '', '', '', '', '', '',
    '' , '' , '' , '' , '' , '' , '',
    '', '', '', '', '', '', '',
  '', '', '', '');

  ngOnInit() {
    this.getTicket();
  }

  getTicket(): void {
    this.listticketService.getTicketFromServer().subscribe(
      (res: Ticket[]) => {
        this.tickets = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  sendTo(ticket: Ticket) {
    this.router.navigate(['ticket/edit-ticket'],
      { queryParams : {...ticket}});
    console.log(ticket);
  }


}
