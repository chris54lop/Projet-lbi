import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ListClientService} from '../services/list-client.service';
import {Router} from '@angular/router';
import {Client} from './client';
import {Donneur} from './donneur';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';

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
    this.getDonneur();
  }

  onSubmit() {

    this.router.navigate(['/clients/list-client']);

    this.resetErrors();
    this.client = JSON.stringify(this.client);
    console.log(this.client);
    this.listclientService.saveClientToServer(this.client)
      .subscribe(
        (res: Client[]) => {
          // Update the list of materiel
          this.client = res;

          // Inform the user
          this.success = 'Created successfully';
          console.log(this.success);
        },
        (err) => this.error = err
      );
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

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }

}

