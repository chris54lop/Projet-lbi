import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ListDemandeService} from '../services/list-demande.service';
import {Demande} from './demande';



@Component({
  templateUrl: 'demande-ticket.component.html'
})
export class DemandeTicketComponent implements OnInit {


  constructor(private listdemandeservice: ListDemandeService,
              private router: Router) { }

  error = '';
  success = '';

  demande = new Demande('', '' , '' , '' , '' , '' );


  ngOnInit() {
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
