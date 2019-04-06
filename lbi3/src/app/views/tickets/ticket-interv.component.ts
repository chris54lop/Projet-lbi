import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ListTicketService} from '../services/list-ticket.service';
import {Subscription} from 'rxjs';
import {TicketInterv} from './ticket-interv';
import {TicketInstall} from './ticket-install';


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

  ticketinterv = new TicketInterv('', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' );



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

  /* onSubmit1( form: NgForm) {
      console.log(form.value);
      const etat2 = form.value['etat2'];
      const donneur4 = form.value['donneur4'];
      const client4 = form.value['client4'];
      const addr1input = form.value['addr1input'];
      const ville1input = form.value['ville1input'];
      const info1input = form.value['info1input'];
      const telfixe1 = form.value['telfixe1'];
      const telportable1 = form.value['telportable1'];
      const respons1input = form.value['respons1input'];
      const typecontrat1 = form.value['typecontrat1'];
      const technicien5 = form.value['technicien5'];
      const technicien6 = form.value['technicien6'];
      const technicien7 = form.value['technicien7'];
      const technicien8 = form.value['technicien8'];
      const dateappel3 = form.value['dateappel3'];
      const hinter = form.value['hinter'];
      const dinterv = form.value['dinterv'];
      const typemat5 = form.value['typemat5'];
      const matri2input = form.value['matri2input'];
      const descripanne = form.value['descripanne'];
      const descritravail = form.value['descritravail'];
      const forfait1input = form.value['forfait1input'];
      const quan4input = form.value['quan4input'];
      const oeuvre1input = form.value['oeuvre1input'];
      const quan5input = form.value['quan5input'];
      const piece1input = form.value['piece1input'];
      const quan6input = form.value['quan6input'];
      const name6input = form.value['name6input'];
      const textarea7input = form.value['textarea7input'];
      const harrive1 = form.value['harrive1'];
      const hdep1 = form.value['hdep1'];
      const rq1 = form.value['rq1'];
      const fileinput1 = form.value['fileinput1'];
      const fiche = 'Inter.';
      this.listticketService.addTicketinterv(etat2, donneur4, client4, addr1input, ville1input, info1input, telfixe1, telportable1, respons1input, typecontrat1,
        technicien5, technicien6, technicien7, technicien8, dateappel3, hinter, dinterv, typemat5, matri2input, descripanne, descritravail, forfait1input, quan4input,
        oeuvre1input, quan5input, piece1input, quan6input, name6input, textarea7input, harrive1, hdep1, rq1, fileinput1, fiche);
      this.router.navigate(['/tickets/list-ticket']);
    }*/

  onSubmit1() {

    this.router.navigate(['/tickets/list-ticket']);

    this.resetErrors();
    this.ticketinterv = JSON.stringify(this.ticketinterv);
    console.log(this.ticketinterv);
    this.listticketService.saveTicketIntervToServer(this.ticketinterv)
      .subscribe(
        (res: TicketInstall[]) => {
          // Update the list of materiel
          this.ticketinterv = res;

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
