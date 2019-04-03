import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'ajout-donneur-ordre.component.html'
})
export class AjoutDonneurOrdreComponent implements OnInit {

  constructor(private listdonneurordreService: ListDonneurOrdreService,
              private router: Router) {
  }
  ngOnInit() {
  }
  onSubmit1(form: NgForm) {
    const intitinput = form.value['intitinput'];
    const name2input = form.value['name2input'];
    const prenom2input = form.value['prenom2input'];
    const email2input = form.value['email2input'];
    const tel2input = form.value['tel2input'];
    const fct2input = form.value['fct2input'];
    const name3input = form.value['name3input'];
    const prenom3input = form.value ['prenom3input'];
    const email3input = form.value['email3input'];
    const tel3input = form.value['tel3input'];
    const fct3input = form.value['fct3input'];
    const name4input = form.value['name4input'];
    const prenom4input = form.value ['prenom4input'];
    const email4input = form.value['email4input'];
    const tel4input = form.value ['tel4input'];
    const fct4input = form.value['fct4input'];
    this.listdonneurordreService.addDonneur(intitinput, name2input, prenom2input, email2input, tel2input, fct2input,
      name3input, prenom3input, email3input, tel3input, fct3input, name4input, prenom4input, email4input, tel4input, fct4input);
    this.router.navigate(['/clients/list-donneur-ordre']);
  }
}
