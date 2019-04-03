import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable ()
export class ListMaterielService {

  constructor() {
  }

  private materiels = [];


  materielsSubject = new Subject<any[]>();

  emitMaterielSubject() {
    this.materielsSubject.next(this.materiels.slice());
  }

  addMateriel( select1: string, marqueinput: string, modeleinput: string, matriinput: string, select21: string, select22: string, date4: string, date3: string) {
    const materielObject = {
      id: 0,
      select1: '',
      marqueinput: '',
      modeleinput: '',
      matriinput: '',
      select21: '',
      select22: '',
      date4: '',
      date3: '',

    };
    materielObject.select1 = select1;
    materielObject.marqueinput = marqueinput;
    materielObject.modeleinput = modeleinput;
    materielObject.matriinput = matriinput;
    materielObject.select21 = select21;
    materielObject.select22 = select22;
    materielObject.date4 = date4;
    materielObject.date3 = date3;
    this.materiels.push(materielObject);
  }

 /* saveMaterielToServer() {
    this.httpMateriel
      .post('https://projet-lbi.firebaseio.com//client.json', this.materiels)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error)
        }
      );
  }*/

}
