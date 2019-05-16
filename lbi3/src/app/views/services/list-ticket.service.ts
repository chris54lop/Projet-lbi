import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Ticket} from '../tickets/ticket';


@Injectable ()
export class ListTicketService {

  tickets: Ticket[];
  headers: any;

  constructor(private httpTicket: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  // Fonction POST
  saveTicketToServer(ticket: Ticket): Observable<Ticket> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpTicket.post<Ticket>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterTicket', ticket, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  // Fonction GET
  getTicketFromServer(): Observable<Ticket[]> {
    return this.httpTicket.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getTicket').pipe(
      map((res) => {
        this.tickets = res as Ticket[];
        return this.tickets;
      }),
      catchError(this.handleError));
  }
  // Fonction PUT
  updateTicket(ticket: Ticket): Observable<Ticket> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    console.log(Ticket);
    return this.httpTicket.put<Ticket>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/majTick', ticket, httpOptions)
      .pipe(map((res) => {
          const theTicket = this.tickets.find((item) => {
            return +item['id_ticket'] === +ticket['id_ticket'];
          });
          if (theTicket) {
            theTicket['etat2'] = ticket['etat2'];
            theTicket['donneur4'] = ticket['donneur4'];
            theTicket['client4'] = ticket['client4'];
            theTicket['addr1input'] = ticket['addr1input'];
            theTicket['ville1input'] = ticket['ville1input'];
            theTicket['infoinput'] = ticket['infoinput'];
            theTicket['telfixe1'] = ticket['telfixe1'];
            theTicket['telportable1'] = ticket['telportable1'];
            theTicket['respons1input'] = ticket['respons1input'];
            theTicket['typecontrat1'] = ticket['typecontrat1'];
            theTicket['technicien5'] = ticket['technicien5'];
            theTicket['technicien6'] = ticket['technicien6'];
            theTicket['technicien7'] = ticket['technicien7'];
            theTicket['technicien8'] = ticket['technicien8'];
            theTicket['dateappel3'] = ticket['dateappel3'];
            theTicket['hinter'] = ticket['hinter'];
            theTicket['dinterv'] = ticket['dinterv'];
            theTicket['typemat5'] = ticket['typemat5'];
            theTicket['matri2input'] = ticket['matri2input'];
            theTicket['descripanne'] = ticket['descripanne'];
            theTicket['descritravail1'] = ticket['descritravail1'];
            theTicket['forfaitinput'] = ticket['forfaitinput'];
            theTicket['quan1input'] = ticket['quan1input'];
            theTicket['oeuvreinput'] = ticket['oeuvreinput'];
            theTicket['quan2input'] = ticket['quan2input'];
            theTicket['pieceinput'] = ticket['pieceinput'];
            theTicket['quan3input'] = ticket['quan3input'];
            theTicket['harrive'] = ticket['harrive'];
            theTicket['hdep'] = ticket['hdep'];
            theTicket['req'] = ticket['req'];
            theTicket['fiche'] = ticket['fiche'];
          }
          return this.tickets;
        }),
        catchError(this.handleError));
  }
  //ajouter ticket url: 'http://localhost:8080/IntranetLbiWeb/rest/Intranet/majTick'

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }



}
