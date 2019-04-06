import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ListClientService} from '../services/list-client.service';
import {Router} from '@angular/router';
import {Client} from './client';

@Component({
  templateUrl: 'ajout-client.component.html'
})
export class AjoutClientComponent implements OnInit {

  error = '';
  success = '';

  client = new Client('', '' , '' , '' , '' , '' , '' ,
    '', '', '' , '' , '' , '' , '' );


  constructor( private listclientService: ListClientService,
               private router: Router) {
  }

  ngOnInit() {
  }
  /*onSubmit(form: NgForm) {

   const etabl = form.value[ 'etabl' ];
   const addr = form.value[ 'addr' ];
   const ville = form.value[ 'ville' ];
   const donneur1 = form.value[ 'donneur1' ];
   const nameinput = form.value[ 'nameinput' ];
   const prenominput = form.value[ 'prenominput' ];
   const emailinput = form.value[ 'emailinput' ];
   const telinput = form.value [ 'telinput' ];
   const fctinput = form.value[ 'fctinput' ];
   const name1input = form.value[ 'name1input' ];
   const prenom1input = form.value[ 'prenom1input' ];
   const email1input = form.value[ 'email1input' ];
   const tel1input = form.value [ 'tel1input' ];
   const fct1input = form.value[ 'fct1input' ];
   this.listclientService.addClient(etabl, addr, ville, donneur1, nameinput, prenominput, emailinput, telinput,
     fctinput, name1input, prenom1input, email1input, tel1input, fct1input);
   this.router.navigate(['/clients/list-client']);
  }*/

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

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }

}

