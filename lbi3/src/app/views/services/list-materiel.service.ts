import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import {Materiel} from '../materiels/materiel';
import {catchError, map} from 'rxjs/operators';

@Injectable ()
export class ListMaterielService {


  materiels: Materiel[] = [];
  headers: any;

  constructor(private httpMateriel: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }


  materielsSubject = new Subject<any[]>();

  emitMaterielSubject() {
    this.materielsSubject.next(this.materiels.slice());
  }

  addMateriel( select1: string, marqueinput: string, modeleinput: string, matriinput: string, select21: string, select22: string, date4: string, date3: string) {
    const materielObject = {
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
   // this.materiels.push(materielObject);
  }

  saveMaterielToServer(materiel: Materiel): Observable<Materiel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpMateriel.post<Materiel>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', materiel, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
      console.log(error);

      // return an observable with a user friendly message
      return throwError('Error! something went wrong.');
  }

}
