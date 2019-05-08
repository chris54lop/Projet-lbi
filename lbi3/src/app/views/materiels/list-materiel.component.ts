import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListMaterielService} from '../services/list-materiel.service';
import {Materiel} from './materiel';

@Component({
  selector: 'app-list-materiel',
  templateUrl: 'list-materiel.component.html'
})
export class ListMaterielComponent implements OnInit, OnDestroy {

  materielSubscription: Subscription;

  constructor( private listmaterielService: ListMaterielService) { }

  materiels: Materiel[];
  error = '';
  success = '';

  materiel = new Materiel('', '' , '' , '' , '' , '' , '' ,  '');


  ngOnInit() {
    this.getMateriel();
    /*this.materielSubscription =
      this.listmaterielService.materielsSubject.subscribe(
        (materiels: any[]) => {
          this.materiels = materiels;
        }
      );
    this.listmaterielService.emitMaterielSubject();*/
  }

  getMateriel(): void {
    this.listmaterielService.getMaterielFromServer().subscribe(
      (res: Materiel[]) => {
        this.materiels = res;
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
    /*this.materielSubscription.unsubscribe();*/
  }

}
