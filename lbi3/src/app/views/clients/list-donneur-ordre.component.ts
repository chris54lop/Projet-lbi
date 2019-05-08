import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { ListDonneurOrdreService} from '../services/list-donneur-ordre.service';
import {Donneur} from './donneur';
import {Utilisateur} from '../utilisateur/utilisateur';

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

  constructor( private listdonneurService: ListDonneurOrdreService) { }

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

}

