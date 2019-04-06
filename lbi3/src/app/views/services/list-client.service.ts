import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Client} from '../clients/client';


@Injectable ()
export class ListClientService {

  headers: any;

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  private clients = [];


  clientsSubject = new Subject<any[]>();

  emitClientSubject() {
    this.clientsSubject.next(this.clients.slice());
  }

  addClient( etabl: string, addr: string, ville: string, donneur1: string, nameinput: string, prenominput: string,
             emailinput: string, telinput: string, fctinput: string, name1input: string, prenom1input: string, email1input: string,
             tel1input: string, fct1input: string) {
    const clientObject = {

      etabl: '',
      addr: '',
      ville: '',
      donneur1: '',
      nameinput: '',
      prenominput: '',
      emailinput: '',
      telinput: '',
      fctinput: '',
      name1input: '',
      prenom1input: '',
      email1input: '',
      tel1input: '',
      fct1input: '',

    };
    clientObject.etabl = etabl;
    clientObject.addr = addr;
    clientObject.ville = ville;
    clientObject.donneur1 = donneur1;
    clientObject.nameinput = nameinput;
    clientObject.prenominput = prenominput;
    clientObject.emailinput = emailinput;
    clientObject.telinput = telinput;
    clientObject.fctinput = fctinput;
    clientObject.name1input = name1input;
    clientObject.prenom1input = prenom1input;
    clientObject.email1input = email1input;
    clientObject.tel1input = tel1input;
    clientObject.fct1input = fct1input;
    this.clients.push(clientObject);
  }

  saveClientToServer(client: Client): Observable<Client> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpClient.post<Client>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', client, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}

