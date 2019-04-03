import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListClientService} from '../services/list-client.service';

@Component({
  templateUrl: 'list-client.component.html'
})
export class ListClientComponent implements OnInit, OnDestroy {

  clients: any[];
  clientSubscription: Subscription;

  constructor( private listclientService: ListClientService) { }

  ngOnInit() {
    this.clientSubscription =
      this.listclientService.clientsSubject.subscribe(
        (clients: any[]) => {
          this.clients = clients;
        }
      );
    this.listclientService.emitClientSubject();
  }

  ngOnDestroy() {
    this.clientSubscription.unsubscribe();
  }

}
