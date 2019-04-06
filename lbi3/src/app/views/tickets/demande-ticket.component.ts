import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ListDemandeService} from '../services/list-demande.service';
import {Demande} from './demande';



@Component({
  templateUrl: 'demande-ticket.component.html'
})
export class DemandeTicketComponent implements OnInit {


  constructor(private listdemandeservice: ListDemandeService,
              private router: Router) { }

  demandes: Demande[];
  error = '';
  success = '';

  demande = new Demande('', '' , '' , '' , '' , '' );


  ngOnInit() {
  }


  onSubmit1( form: NgForm) {
    const typefiche = form.value['typefiche'];
    const dateappel1 = form.value['dateappel1'];
    const recep = form.value['recep'];
    const client = form.value['client'];
    const typemat3 = form.value['typemat3'];
    const descri = form.value['descri'];
    this.listdemandeservice.addDemande(typefiche, dateappel1, recep, client, typemat3, descri);
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {

    this.router.navigate(['/dashboard']);

    this.resetErrors();
    this.demande = JSON.stringify(this.demande);
    console.log(this.demande);
    this.listdemandeservice.saveDemandeToServer(this.demande)
      .subscribe(
        (res: Demande[]) => {
          // Update the list of materiel
          this.demande = res;

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
