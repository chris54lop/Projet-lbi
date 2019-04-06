import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ListMaterielService} from '../services/list-materiel.service';
import {NgForm} from '@angular/forms';
import { Materiel} from './materiel';

@Component({
  templateUrl: 'ajout-materiel.component.html'
})
export class AjoutMaterielComponent implements OnInit {
  materiels: Materiel[];
  error = '';
  success = '';

  materiel = new Materiel('', '' , '' , '' , '' , '' , '' ,  '');

  constructor(private listmaterielService: ListMaterielService,
              private router: Router) {
  }
  ngOnInit() {
  }
  onSubmit2(form: NgForm) {
    const typemat1 = form.value['typemat1'];
    const marqueinput = form.value['marqueinput'];
    const modeleinput = form.value['modeleinput'];
    const matriinput = form.value['matriinput'];
    const donneur2 = form.value['donneur2'];
    const client1 = form.value['client1'];
    const dategarantie1 = form.value['dategarantie1'];
    const dateachat1 = form.value['dateachat1'];
    this.listmaterielService.addMateriel(typemat1, marqueinput, modeleinput, matriinput, donneur2, client1, dategarantie1, dateachat1);
    this.router.navigate(['/materiels/list-materiel']);

  }
  onSubmit54(d) {

    this.router.navigate(['/materiels/list-materiel']);

    this.resetErrors();
    this.materiel = JSON.stringify(this.materiel);
    console.log(this.materiel);
    this.listmaterielService.saveMaterielToServer(this.materiel)
      .subscribe(
        (res: Materiel[]) => {
          // Update the list of materiel
          this.materiel = res;

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
