import {Component, OnInit} from '@angular/core';
import { ListDonneurOrdreService} from '../services/list-donneur-ordre.service';
import {Donneur} from './donneur';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'list-donneur-ordre.component.html'
})
export class ListDonneurOrdreComponent implements OnInit {

  donneurs: Donneur[];
  error = '';
  success = '';
  donneur = new Donneur('', '', '', '', '', '',
    '', '', '', '', '', '', '',
    '', '', '');

  constructor( private listdonneurService: ListDonneurOrdreService,
               private router: Router) { }

  ngOnInit() {
    this.getDonneur();
  }

  getDonneur(): void {
    this.listdonneurService.getDonneurFromServer().subscribe(
      (res: Donneur[]) => {
        this.donneurs = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  sendTo(donneur: Donneur) {
    this.router.navigate(['donneur/edit-donneur-ordre'], // Navigue vers l'URL
      { queryParams : {...donneur}}); // avec ces paramètres (ici tout les variables de client)
    console.log(donneur);
  }

}

