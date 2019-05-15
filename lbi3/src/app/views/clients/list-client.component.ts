import {Component, OnInit} from '@angular/core';
import {ListClientService} from '../services/list-client.service';
import {Client} from './client';
import {Router} from '@angular/router';


@Component({
  templateUrl: 'list-client.component.html'
})
export class ListClientComponent implements OnInit {

  clients: Client[];
  error = '';
  success = '';
  client = new Client( '', '', '', '', '', '', '', '',
    '', '', '', '', '', '');

  constructor( private listclientService: ListClientService,
               private router: Router) { }

  ngOnInit() {
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

  sendTo(client: Client) {
    this.router.navigate(['client/edit-client'],
      { queryParams : {...client}});
    console.log(client);
  }


}
