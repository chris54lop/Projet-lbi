import {Component, OnInit} from '@angular/core';
import {ListClientService} from '../services/list-client.service';
import {Client} from './client';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-edit-client',
  templateUrl: 'edit-client.component.html'
})
export class EditClientComponent implements OnInit {

  error = '';
  success = '';
  client = new Client('', '', '', '', '', '', '', '',
    '', '', '', '', '', '');

  constructor(private listclientService: ListClientService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => { // Récupère les variables qui ont été envoyés dans params (lien avec router.navigate)
      this.client.etabl = params.etabl;
      this.client.addr = params.addr;
      this.client.ville = params.ville;
      this.client.donneur1 = params.donneur1;
      this.client.nameinput = params.nameinput;
      this.client.prenominput = params.prenominput;
      this.client.emailinput = params.emailinput;
      this.client.telinput = params.telinput;
      this.client.fctinput = params.fctinput;
      this.client.name1input = params.name1input;
      this.client.prenom1input = params.prenom1input;
      this.client.email1input = params.email1input;
      this.client.tel1input = params.tel1input;
      this.client.fct1input = params.fct1input;
    })
  }

  update() { // Modifie les données
    this.resetErrors();
    this.listclientService.updateClient(this.client) // via la fonction put définie dans le service
      .subscribe(
        (res) => {
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
    console.log(this.client); // affichage dans la console
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }
 
}
