import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { ListDonneurOrdreService} from '../services/list-donneur-ordre.service';

@Component({
  templateUrl: 'list-donneur-ordre.component.html'
})
export class ListDonneurOrdreComponent implements OnInit, OnDestroy {

  donneurs: any[];
  donneurSubscription: Subscription;

  constructor( private listdonneurService: ListDonneurOrdreService) { }

  ngOnInit() {
    this.donneurSubscription =
      this.listdonneurService.donneursSubject.subscribe(
        (donneurs: any[]) => {
          this.donneurs = donneurs;
        }
      );
    this.listdonneurService.emitDonneurSubject();
  }

  ngOnDestroy() {
    this.donneurSubscription.unsubscribe();
  }

}

