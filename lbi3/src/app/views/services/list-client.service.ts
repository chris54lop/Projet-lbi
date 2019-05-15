import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Client} from '../clients/client';



@Injectable ()
export class ListClientService {

  headers: any;
  clients: Client[];

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
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
    return this.httpClient.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getClient').pipe(
      map((res) => {
        this.clients = res as Client[];
        return this.clients;
      }),
      catchError(this.handleError));
  }

  updateClient(client: Client): Observable<Client> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpClient.put<Client>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/majClient', client, httpOptions)
      .pipe(map((res) => {
          const theClient = this.clients.find((item) => {
            return +item['id_client'] === +client['id_client'];
          });
          if (theClient) {
            theClient['etabl'] = client['etabl'];
            theClient['addr'] = client['addr'];
            theClient['ville'] = client['ville'];
            theClient['donneur1'] = client['donneur1'];
            theClient['nameinput'] = client['nameinput'];
            theClient['prenominput'] = client['prenominput'];
            theClient['emailinput'] = client['emailinput'];
            theClient['telinput'] = client['telinput'];
            theClient['fctinput'] = client['fctinput'];
            theClient['name1input'] = client['name1input'];
            theClient['prenom1input'] = client['prenom1input'];
            theClient['email1input'] = client['email1input'];
            theClient['tel1input'] = client['tel1input'];
            theClient['fct1input'] = client['fctinput'];
          }
          return this.clients;
        }),
        catchError(this.handleError));
  }

  //maj client url: 'http://localhost:8080/IntranetLbiWeb/rest/Intranet/majClient'

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }
}

