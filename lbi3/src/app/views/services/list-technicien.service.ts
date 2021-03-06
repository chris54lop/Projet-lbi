import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Technicien} from '../techniciens/technicien';

@Injectable ()
export class ListTechnicienService {

  headers: any;
  techniciens: Technicien[];

  constructor(private httpTechnicien: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  // Fonction POST
  saveTechnicienToServer(technicien: Technicien): Observable<Technicien> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpTechnicien.post<Technicien>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterTech', technicien, httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  // Fonction GET
  getTechnicienFromServer(): Observable<Technicien[]> {
    return this.httpTechnicien.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getTech').pipe(
      map((res) => {
        this.techniciens = res as Technicien[];
        return this.techniciens;
      }),
      catchError(this.handleError));
  }

  //maj tech url: 'http://localhost:8080/IntranetLbiWeb/rest/Intranet/majTech'

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
