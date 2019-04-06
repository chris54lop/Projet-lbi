import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Technicien} from '../techniciens/technicien';

@Injectable ()
export class ListTechnicienService {

  headers: any;

  constructor(private httpTechnicien: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  saveTechnicienToServer(technicien: Technicien): Observable<Technicien> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpTechnicien.post<Technicien>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', technicien, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
