import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';
import {Donneur} from './donneur';

// Composant permettant de rajouter des donneurs d'ordre

@Component({
  templateUrl: 'ajout-donneur-ordre.component.html'
})
export class AjoutDonneurOrdreComponent implements OnInit {

  error = '';
  success = '';

  donneur = new Donneur('', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '');


  constructor(private listdonneurordreService: ListDonneurOrdreService,
              private router: Router) {
  }
  ngOnInit() {
  }

  onSubmit1() { // Une fois remplie cette méthode (lié à un bouton) permet d'envoyer les données sur le serveur

    this.router.navigate(['/clients/list-donneur-ordre']);

    this.resetErrors();
    this.donneur = JSON.stringify(this.donneur); // Afin de pouvoir envoyer sur le serveur il faut convertir les données en JSON
    console.log(this.donneur);
    this.listdonneurordreService.saveDonneurToServer(this.donneur) // Utilisation de la méthode post définie dans le service
      .subscribe(
        (res: Donneur[]) => {
          // Update the list of donneur
          this.donneur = res;

          // Inform the user
          this.success = 'Created successfully';
          console.log(this.success);
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }


}
