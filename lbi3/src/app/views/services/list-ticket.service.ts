import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Ticket} from '../tickets/ticket';
import {Utilisateur} from '../utilisateur/utilisateur';


@Injectable ()
export class ListTicketService {

  tickets: Ticket[];
  headers: any;

  constructor(private httpTicket: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  ticketsSubject = new Subject<any[]>();
  emitTicketSubject() {
    this.ticketsSubject.next(this.tickets.slice());
  }

  saveTicketToServer(ticket: Ticket): Observable<Ticket> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpTicket.post<Ticket>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', ticket, httpOptions)
      .pipe(
        catchError(this.handleError));

  }


  getTicketFromServer(): Observable<Ticket[]> {
    return this.httpTicket.get('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat').pipe(
      map((res) => {
        this.tickets = res as Ticket[];
        return this.tickets;
      }),
      catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }



}
