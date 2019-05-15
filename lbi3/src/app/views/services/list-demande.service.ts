import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Demande} from '../tickets/demande';
import {Utilisateur} from '../utilisateur/utilisateur';


@Injectable ()
export class ListDemandeService {

  demandes: Demande[] = [];
  headers: any;

  constructor(private httpDemande: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  saveDemandeToServer(demande: Demande): Observable<Demande> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpDemande.post<Demande>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterDemandeTick', demande, httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  getDemandeFromServer(): Observable<Demande[]> {
    return this.httpDemande.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getDemandeTick').pipe(
      map((res) => {
        this.demandes = res as Demande[];
        return this.demandes;
      }),
      catchError(this.handleError));
  }

  //supprimer demande url:'http://localhost:8080/IntranetLbiWeb/rest/Intranet/deleteDemandeTick'

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }


}
