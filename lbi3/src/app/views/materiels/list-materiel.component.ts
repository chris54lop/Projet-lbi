import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListMaterielService} from '../services/list-materiel.service';

@Component({
  selector: 'app-list-materiel',
  templateUrl: 'list-materiel.component.html'
})
export class ListMaterielComponent implements OnInit, OnDestroy {

  materiels: any[];
  materielSubscription: Subscription;

  constructor( private listmaterielService: ListMaterielService) { }

  ngOnInit() {
    this.materielSubscription =
      this.listmaterielService.materielsSubject.subscribe(
        (materiels: any[]) => {
          this.materiels = materiels;
        }
      );
    this.listmaterielService.emitMaterielSubject();
  }

  ngOnDestroy() {
    this.materielSubscription.unsubscribe();
  }

}
