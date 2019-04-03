import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ListClientService} from '../services/list-client.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'ajout-client.component.html'
})
export class AjoutClientComponent implements OnInit {

  constructor( private listclientService: ListClientService,
               private router: Router) {
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

   const hfetabl = form.value[ 'hfetabl' ];
   const hfaddr = form.value[ 'hfaddr' ];
   const hfville = form.value[ 'hfville' ];
   const select7 = form.value[ 'select7' ];
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
   this.listclientService.addClient(hfetabl, hfaddr, hfville, select7, nameinput, prenominput, emailinput, telinput,
     fctinput, name1input, prenom1input, email1input, tel1input, fct1input);
   this.router.navigate(['/clients/list-client']);
  }
}

