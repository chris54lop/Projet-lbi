import {Component, OnInit} from '@angular/core';
import {ListClientService} from '../services/list-client.service';
import {Router} from '@angular/router';
import {Client} from './client';
import {Donneur} from './donneur';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';

// Composant permettant de rajouter des clients

@Component({
  templateUrl: 'ajout-client.component.html'
})
export class AjoutClientComponent implements OnInit {

  error = '';
  success = '';

  donneurs: Donneur[];
  donneur = new Donneur('', '', '', '', '', '',
    '', '', '', '', '', '', '',
    '', '', '');

  client = new Client('', '' , '' , '' , '' , '' , '' ,
    '', '', '' , '' , '' , '' , '' );


  constructor( private listclientService: ListClientService,
               private listdonneurService: ListDonneurOrdreService,
               private router: Router) {
  }

  ngOnInit() {
    this.getDonneur(); // initialise la page avec les données actuels du serveur
  }

  onSubmit() { // Une fois remplie cette méthode (lié à un bouton) permet d'envoyer les données sur le serveur
    this.router.navigate(['/clients/list-client']);
    this.resetErrors();
    this.client = JSON.stringify(this.client); // Afin de pouvoir envoyer sur le serveur il faut convertir les données en JSON
    console.log(this.client);
    this.listclientService.saveClientToServer(this.client) // Utilisation de la méthode post définie dans le service
      .subscribe(
        (res: Client[]) => {
          // Update the list of client
          this.client = res;

          // Inform the user
          this.success = 'Created successfully';
          console.log(this.success);
        },
        (err) => this.error = err
      );
  }

  getDonneur(): void { // Récupère la liste de donneur d'ordre sauvegardé dans la base de données
    this.listdonneurService.getDonneurFromServer().subscribe( // Méthode défini dans le service
      (res: Donneur[]) => {
        this.donneurs = res;
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

}

