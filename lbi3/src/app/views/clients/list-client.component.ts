import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListClientService} from '../services/list-client.service';
import {Client} from './client';
import {Utilisateur} from '../utilisateur/utilisateur';

@Component({
  templateUrl: 'list-client.component.html'
})
export class ListClientComponent implements OnInit, OnDestroy {

  clients: Client[];
  error = '';
  success = '';
  client = new Client( '', '', '', '', '', '', '', '',
    '', '', '', '', '', '');
  clientSubscription: Subscription;

  constructor( private listclientService: ListClientService) { }

  ngOnInit() {
    /*this.clientSubscription =
      this.listclientService.clientsSubject.subscribe(
        (clients: any[]) => {
          this.clients = clients;
        }
      );
    this.listclientService.emitClientSubject();*/
    this.getClient();
  }

  getClient(): void {
    this.listclientService.getClientFromServer().subscribe(
      (res: Client[]) => {
        this.clients = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnDestroy() {
    this.clientSubscription.unsubscribe();
  }

}
