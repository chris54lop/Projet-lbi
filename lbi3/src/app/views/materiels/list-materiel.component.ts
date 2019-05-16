import {Component, OnInit} from '@angular/core';
import {ListMaterielService} from '../services/list-materiel.service';
import {Materiel} from './materiel';

@Component({
  selector: 'app-list-materiel',
  templateUrl: 'list-materiel.component.html'
})
export class ListMaterielComponent implements OnInit {

  constructor(private listmaterielService: ListMaterielService) {
  }

  materiels: Materiel[];
  error = '';
  success = '';

  materiel = new Materiel('', '', '', '', '', '', '', '');


  ngOnInit() {
    this.getMateriel();
  }

  getMateriel(): void {
    this.listmaterielService.getMaterielFromServer().subscribe(
      (res: Materiel[]) => {
        this.materiels = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private resetErrors() {
    this.success = '';
    this.error = '';
  }

}


