import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Materiel} from '../materiels/materiel';
import {Type} from '../materiels/type';
import {catchError, map} from 'rxjs/operators';

@Injectable ()
export class ListMaterielService {


  materiels: Materiel[];
  headers: any;
  types: Type[];


  constructor(private httpMateriel: HttpClient,
              private httpType: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }


  // Fonction POST
  saveMaterielToServer(materiel: Materiel): Observable<Materiel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpMateriel.post<Materiel>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterMateriel', materiel, httpOptions)
      .pipe(
        catchError(this.handleError));

  }
  // Fonction POST
  saveTypeToServer(type: Type): Observable<Type> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpMateriel.post<Type>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterTypeMat', type, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  // Fonction GET
  getMaterielFromServer(): Observable<Materiel> {
    return this.httpMateriel.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getMateriel').pipe(
      map((res) => {
        this.materiels = res as Materiel[];
        return this.materiels;
      }),
      catchError(this.handleError));
  }
  // Fonction GET
  getTypeFromServer(): Observable<Type> {
    return this.httpType.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getTypeMat').pipe(
      map((res) => {
        this.types = res as Type[];
        return this.types;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
      console.log(error);
      // return an observable with a user friendly message
      return throwError('Error! something went wrong.');
  }

}
