import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Materiel} from '../materiels/materiel';
import {Type} from '../materiels/type';
import {catchError} from 'rxjs/operators';

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

  addMateriel( typemat1: string, marqueinput: string, modeleinput: string, matriinput: string, donneur2: string, client1: string, dategarantie1: string, dateachat1: string) {
    const materielObject = {
      typemat1: '',
      marqueinput: '',
      modeleinput: '',
      matriinput: '',
      donneur2: '',
      client1: '',
      dategarantie1: '',
      dateachat1: '',

    };
    materielObject.typemat1 = typemat1;
    materielObject.marqueinput = marqueinput;
    materielObject.modeleinput = modeleinput;
    materielObject.matriinput = matriinput;
    materielObject.donneur2 = donneur2;
    materielObject.client1 = client1;
    materielObject.dategarantie1 = dategarantie1;
    materielObject.dateachat1 = dateachat1;
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
  saveTypeToServer(type: Type): Observable<Type> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpMateriel.post<Type>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', type, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
      console.log(error);

      // return an observable with a user friendly message
      return throwError('Error! something went wrong.');
  }

}
