import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ListMaterielService} from '../services/list-materiel.service';
import { Materiel } from './materiel';
import { Type } from './type';

@Component({
  templateUrl: 'ajout-materiel.component.html'
})
export class AjoutMaterielComponent implements OnInit {
  materiels: Materiel[];
  error = '';
  success = '';
  types: Type[];
  type = new Type('');
  materiel = new Materiel('', '' , '' , '' , '' , '' , '' ,  '');

  constructor(private listmaterielService: ListMaterielService,
              private router: Router) {
  }
  ngOnInit() {
    this.getType();
  }

  onSubmit54() {

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

  getType(): void {
    this.listmaterielService.getTypeFromServer().subscribe(
      (res: Type[]) => {
        this.types = res;
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
