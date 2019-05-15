import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListDemandeService} from '../services/list-demande.service';
import {Demande} from './demande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-demande',
  templateUrl: 'list-demande.component.html'
})
export class ListDemandeComponent implements OnInit {

  demandes: Demande[];
  error = '';
  success = '';
  demande = new Demande( '', '', '', '', '', '', );

  constructor( private listdemandeService: ListDemandeService,
               private router: Router) { }

  ngOnInit() {
    this.getDemande();
  }

  sendTo(demande: Demande) {
    if(demande.typefiche === 'Installation') {
    this.router.navigate(['ticket/ticket-install'],
      { queryParams : {...demande}});
    console.log(demande);
    }
    if (demande.typefiche === 'Intervention') {
      this.router.navigate(['ticket/ticket-interv'],
        { queryParams : {...demande}});
      console.log(demande);
    }
  }

  getDemande(): void {
    this.listdemandeService.getDemandeFromServer().subscribe(
      (res: Demande[]) => {
        this.demandes = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );

  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }

}

