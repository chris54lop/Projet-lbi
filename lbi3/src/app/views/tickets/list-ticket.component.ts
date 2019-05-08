import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListTicketService} from '../services/list-ticket.service';
import { Ticket} from './ticket';
import {Utilisateur} from '../utilisateur/utilisateur';

@Component({
  selector: 'app-list-ticket',
  templateUrl: 'list-ticket.component.html'
})
export class ListTicketComponent implements OnInit, OnDestroy {

  ticketSubscription: Subscription;

  constructor( private listticketService: ListTicketService ) { }

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
    /*this.ticketSubscription =
      this.listticketService.ticketsSubject.subscribe(
        (tickets: any[]) => {
          this.tickets = tickets;
        }
      );
    this.listticketService.emitTicketSubject();*/
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

  ngOnDestroy() {
    this.ticketSubscription.unsubscribe();
  }

}
