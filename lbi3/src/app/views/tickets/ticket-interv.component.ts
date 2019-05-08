import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ListTicketService} from '../services/list-ticket.service';
import {Subscription} from 'rxjs';
import {Ticket} from './ticket';


@Component({
  templateUrl: 'ticket-interv.component.html'
})
export class TicketIntervComponent implements OnInit {

  private subscription: Subscription;
  date1: number;
  client: string;
  radios1: number;

  error = '';
  success = '';

  ticket = new Ticket('', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' );



  constructor(private listticketService: ListTicketService,
              private router: Router,
              private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe(
      params => {
        this.radios1 = params['demandetypemat3'];
        this.date1 = params['demandedateappel1'];
        this.client = params['demandeclient'];
      }
    );
  }
  ngOnInit() {}

  onSubmit1() {

    this.router.navigate(['/tickets/list-ticket']);

    this.resetErrors();
    this.ticket = JSON.stringify(this.ticket);
    console.log(this.ticket);
    this.listticketService.saveTicketToServer(this.ticket)
      .subscribe(
        (res: Ticket[]) => {
          // Update the list of materiel
          this.ticket = res;

          // Inform the user
          this.success = 'Created successfully';
          console.log(this.success);
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }


}
