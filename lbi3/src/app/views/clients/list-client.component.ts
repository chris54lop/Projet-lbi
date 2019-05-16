import {Component, OnInit} from '@angular/core';
import {ListClientService} from '../services/list-client.service';
import {Client} from './client';
import {Router} from '@angular/router';

// Composant affichant la liste de clients
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
    this.getClient(); // Initialise le tableau avec les clients sauvegardés dans la base de données
  }

  getClient(): void { // Récupère tout les client
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
    this.router.navigate(['client/edit-client'], // Navigue vers l'URL
      { queryParams : {...client}}); // avec ces paramètres (ici tout les variables de client)
    console.log(client);
  }


}
