import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListDemandeService} from '../services/list-demande.service';

@Component({
  selector: 'app-list-demande',
  templateUrl: 'list-demande.component.html'
})
export class ListDemandeComponent implements OnInit, OnDestroy {

  demandes: any[];
  demandeSubscription: Subscription;

  constructor( private listdemandeService: ListDemandeService) { }

  ngOnInit() {
    this.demandeSubscription =
      this.listdemandeService.demandesSubject.subscribe(
        (demandes: any[]) => {
          this.demandes = demandes;
        }
        );
        this.listdemandeService.emitDemandeSubject();
  }

  ngOnDestroy() {
    this.demandeSubscription.unsubscribe();
  }
}

