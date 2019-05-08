import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListDemandeService} from '../services/list-demande.service';
import {Demande} from './demande';

@Component({
  selector: 'app-list-demande',
  templateUrl: 'list-demande.component.html'
})
export class ListDemandeComponent implements OnInit, OnDestroy {

  demandes: Demande[];
  error = '';
  success = '';
  demandeSubscription: Subscription;
  demande = new Demande( '', '', '', '', '', '', );
  constructor( private listdemandeService: ListDemandeService) { }

  ngOnInit() {
    /*this.demandeSubscription =
      this.listdemandeService.demandesSubject.subscribe(
        (demandes: any[]) => {
          this.demandes = demandes;
        }
        );
        this.listdemandeService.emitDemandeSubject();*/
    this.getDemande();
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

  ngOnDestroy() {
    this.demandeSubscription.unsubscribe();
  }
}

