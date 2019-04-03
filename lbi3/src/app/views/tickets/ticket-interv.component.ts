import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ListTicketService} from '../services/list-ticket.service';
import {Subscription} from 'rxjs';


@Component({
  templateUrl: 'ticket-interv.component.html'
})
export class TicketIntervComponent implements OnInit{

  private subscription: Subscription;
  date1: number;
  client: string;
  radios1: number;


  constructor(private listticketService: ListTicketService,
              private router: Router,
              private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe(
      params => {
        this.radios1 = params['demanderadios1'];
        this.date1 = params['demandedate1'];
        this.client = params['demandeclient'];
      }
    );
  }
  ngOnInit() {}


  onSubmit1( form: NgForm) {
    console.log(form.value);
    const select19 = form.value['select19'];
    const select8 = form.value['select8'];
    const select9 = form.value['select9'];
    const addr1input = form.value['addr1input'];
    const ville1input = form.value['ville1input'];
    const info1input = form.value['info1input'];
    const tel6input = form.value['tel6input'];
    const tel7input = form.value['tel7input'];
    const respons1input = form.value['respons1input'];
    const select20 = form.value['select20'];
    const technicien5 = form.value['technicien5'];
    const technicien6 = form.value['technicien6'];
    const technicien7 = form.value['technicien7'];
    const technicien8 = form.value['technicien8'];
    const date2input = form.value['date2input'];
    const time5input = form.value['time5input'];
    const date3input = form.value['date3input'];
    const select10 = form.value['select10'];
    const matri2input = form.value['matri2input'];
    const textarea5input = form.value['textarea5input'];
    const textarea6input = form.value['textarea6input'];
    const forfait1input = form.value['forfait1input'];
    const quan4input = form.value['quan4input'];
    const oeuvre1input = form.value['oeuvre1input'];
    const quan5input = form.value['quan5input'];
    const piece1input = form.value['piece1input'];
    const quan6input = form.value['quan6input'];
    const name6input = form.value['name6input'];
    const textarea7input = form.value['textarea7input'];
    const time6input = form.value['time6input'];
    const time7input = form.value['time7input'];
    const textarea8input = form.value['textarea8input'];
    const fileinput1 = form.value['fileinput1'];
    const fiche = 'Inter.';
    this.listticketService.addTicketinterv(select19, select8, select9, addr1input, ville1input, info1input, tel6input, tel7input, respons1input, select20,
      technicien5, technicien6, technicien7, technicien8, date2input, time5input, date3input, select10, matri2input, textarea5input, textarea6input, forfait1input, quan4input,
      oeuvre1input, quan5input, piece1input, quan6input, name6input, textarea7input, time6input, time7input, textarea8input, fileinput1, fiche);
    this.router.navigate(['/tickets/list-ticket']);
  }
}
