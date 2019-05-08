import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Donneur} from '../clients/donneur';
import {Utilisateur} from '../utilisateur/utilisateur';

@Injectable ()
export class ListDonneurOrdreService {

  headers: any;
  donneurs: Donneur[];

  constructor(private httpDonneur: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }



  donneursSubject = new Subject<any[]>();

  emitDonneurSubject() {
    this.donneursSubject.next(this.donneurs.slice());
  }

  saveDonneurToServer(donneur: Donneur): Observable<Donneur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpDonneur.post<Donneur>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterDonneur', donneur, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  getDonneurFromServer(): Observable<Donneur[]> {
    return this.httpDonneur.get('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat').pipe(
      map((res) => {
        this.donneurs = res as Donneur[];
        return this.donneurs;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}
