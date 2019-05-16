import {Component} from '@angular/core';
import {ExcelService} from '../services/excel.service';


@Component({
  selector: 'app-stat',
  templateUrl: 'stat.component.html'
})
export class StatComponent {

  //Modèle pour pouvoir exporter en excel

  name = 'Angular 6';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
    {
      eid: 'e102',
      ename: 'ram',
      esal: 2000
    },
    {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000
    }];


  constructor(private excelService: ExcelService) {
  }
  exportAsXLSX(): void { // Fonction lié à un bouton permettant d'exporter en fichier Excel
    this.excelService.exportAsExcelFile(this.data, 'Résultats');
  }

}


