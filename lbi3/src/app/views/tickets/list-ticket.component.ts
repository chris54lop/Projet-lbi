import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListTicketService} from '../services/list-ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: 'list-ticket.component.html'
})
export class ListTicketComponent implements OnInit, OnDestroy {

  tickets: any[];
  ticketSubscription: Subscription;

  constructor( private listticketService: ListTicketService ) { }

  ngOnInit() {
    this.ticketSubscription =
      this.listticketService.ticketsSubject.subscribe(
        (tickets: any[]) => {
          this.tickets = tickets;
        }
      );
    this.listticketService.emitTicketSubject();
  }

  ngOnDestroy() {
    this.ticketSubscription.unsubscribe();
  }

}
