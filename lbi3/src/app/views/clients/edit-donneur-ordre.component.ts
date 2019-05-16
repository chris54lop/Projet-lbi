import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Donneur} from './donneur';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';



@Component({
  selector: 'app-edit-donneur-ordre',
  templateUrl: 'edit-donneur-ordre.component.html'
})
export class EditDonneurOrdreComponent implements OnInit {

  error = '';
  success = '';
  donneur = new Donneur('', '', '', '', '',
    '', '', '', '', '', '',
    '', '', '', '', '');

  constructor(private listdonneurService: ListDonneurOrdreService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => { // Récupère les variables qui ont été envoyé dans params
      this.donneur.intitinput = params.intitinput;
      this.donneur.name2input = params.name2input;
      this.donneur.prenom2input = params.prenom2input;
      this.donneur.email2input = params.email2input;
      this.donneur.tel2input = params.tel2input;
      this.donneur.fct2input = params.fct2input;
      this.donneur.name3input = params.name3input;
      this.donneur.prenom3input = params.prenom3input;
      this.donneur.email3input = params.email3input;
      this.donneur.tel3input = params.tel3input;
      this.donneur.fct3input = params.fct3input;
      this.donneur.name4input = params.name4input;
      this.donneur.prenom4input = params.prenom4input;
      this.donneur.email4input = params.email4input;
      this.donneur.tel4input = params.tel4input;
      this.donneur.fct4input = params.fct4input;
    })
  }

  update() { // Modifie les données
    this.resetErrors();
    this.listdonneurService.updateDonneur(this.donneur)
      .subscribe(
        (res) => {
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }

}
