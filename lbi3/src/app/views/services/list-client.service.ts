import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Client} from '../clients/client';
import {Utilisateur} from '../utilisateur/utilisateur';


@Injectable ()
export class ListClientService {

  headers: any;
  clients: Client[];

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  clientsSubject = new Subject<any[]>();

  emitClientSubject() {
    this.clientsSubject.next(this.clients.slice());
  }

  saveClientToServer(client: Client): Observable<Client> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpClient.post<Client>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterClient', client, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  getClientFromServer(): Observable<Client[]> {
    return this.httpClient.get('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat').pipe(
      map((res) => {
        this.clients = res as Client[];
        return this.clients;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}

