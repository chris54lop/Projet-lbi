import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ListClientService} from '../services/list-client.service';
import {Client} from './client';


@Component({
  templateUrl: 'list-client.component.html'
})
export class ListClientComponent implements OnInit {

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


}
