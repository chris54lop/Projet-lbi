import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ListDemandeService} from '../services/list-demande.service';



@Component({
  templateUrl: 'demande-ticket.component.html'
})
export class DemandeTicketComponent implements OnInit {


  constructor(private listdemandeservice: ListDemandeService,
              private router: Router) { }



  ngOnInit() {
  }


  onSubmit( form: NgForm) {
    const radios = form.value['radios'];
    const date1 = form.value['date1'];
    const recep = form.value['recep'];
    const client = form.value['client'];
    const radios1 = form.value['radios1'];
    const descri = form.value['descri'];
    this.listdemandeservice.addDemande(radios, date1, recep, client, radios1, descri);
    this.router.navigate(['/dashboard']);
  }

}
