import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {TicketInstall} from '../tickets/ticket-install';
import {TicketInterv} from '../tickets/ticket-interv';

@Injectable ()
export class ListTicketService {

  ticketinstalls: TicketInstall[] = [];
  headers: any;

  private ticketsinterv; ticketsinstall;

  constructor(private httpTicket: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  ticketsSubject = new Subject<any[]>();


  private tickets = [];

  emitTicketSubject() {
    this.ticketsSubject.next(this.tickets.slice());
  }

  addTicketinstall( etat1: string, donneur3: string, client2: string, hfaddr: string, villeinput: string, infoinput: string,
                    telfixe: string, telportable: string, responsinput: string, typecontrat: string, technicien1: string, technicien2: string, technicien3: string, technicien4: string, dateappel2: string,
                    heureinterv: string, dateinterv: string, typemat4: string, matri1input: string, descrimat: string, descritravail: string,
                    forfaitinput: string, quan1input: string, oeuvreinput: string, quan2input: string, pieceinput: string,  quan3input: string, name5input: string, textarea3input: string, harrive: string,
                    hdep: string, rq: string, fileinput: string, fiche: string) {
    const ticketinstallObject = {
      etat1: '',
      donneur3: '',
      client2: '',
      hfaddr: '',
      villeinput: '',
      infoinput: '',
      telfixe: '',
      telportable: '',
      responsinput: '',
      typecontrat: '',
      technicien1: '',
      technicien2: '',
      technicien3: '',
      technicien4: '',
      dateappel2: '',
      heureinterv: '',
      dateinterv: '',
      typemat4: '',
      matri1input: '',
      descrimat: '',
      descritravail: '',
      forfaitinput: '',
      quan1input: '',
      oeuvreinput: '',
      quan2input: '',
      pieceinput: '',
      quan3input: '',
      name5input: '',
      textarea3input: '',
      harrive: '',
      hdep: '',
      rq: '',
      fileinput: '',
      fiche: '',
    };
    ticketinstallObject.etat1 = etat1;
    ticketinstallObject.donneur3 = donneur3;
    ticketinstallObject.client2 = client2;
    ticketinstallObject.hfaddr = hfaddr;
    ticketinstallObject.villeinput = villeinput;
    ticketinstallObject.infoinput = infoinput;
    ticketinstallObject.telfixe = telfixe;
    ticketinstallObject.telportable = telportable;
    ticketinstallObject.responsinput = responsinput;
    ticketinstallObject.typecontrat = typecontrat;
    ticketinstallObject.technicien1 = technicien1;
    ticketinstallObject.technicien2 = technicien2;
    ticketinstallObject.technicien3 = technicien3;
    ticketinstallObject.technicien4 = technicien4;
    ticketinstallObject.dateappel2 = dateappel2;
    ticketinstallObject.heureinterv = heureinterv;
    ticketinstallObject.dateinterv = dateinterv;
    ticketinstallObject.typemat4 = typemat4;
    ticketinstallObject.matri1input = matri1input;
    ticketinstallObject.descrimat = descrimat;
    ticketinstallObject.descritravail = descritravail;
    ticketinstallObject.forfaitinput = forfaitinput;
    ticketinstallObject.quan1input = quan1input;
    ticketinstallObject.oeuvreinput = oeuvreinput;
    ticketinstallObject.quan2input = quan2input;
    ticketinstallObject.pieceinput = pieceinput;
    ticketinstallObject.quan3input = quan3input;
    ticketinstallObject.name5input = name5input;
    ticketinstallObject.textarea3input = textarea3input;
    ticketinstallObject.harrive = harrive;
    ticketinstallObject.hdep = hdep;
    ticketinstallObject.rq = rq;
    ticketinstallObject.fileinput = fileinput;
    ticketinstallObject.fiche = fiche;
    this.tickets.push(ticketinstallObject);


  }

  addTicketinterv( etat2: string, donneur4: string, client4: string, addr1input: string, ville1input: string, info1input: string,
                    telfixe1: string, telportable1: string, respons1input: string, typecontrat1: string, technicien5: string, technicien6: string, technicien7: string, technicien8: string, dateappel3: string,
                    hinter: string, dinterv: string, typemat5: string, matri2input: string, descripanne: string, descritravail1: string,
                    forfait1input: string, quan4input: string, oeuvre1input: string, quan5input: string, piece1input: string, quan6input: string, name6input: string, textarea7input: string, harrive1: string,
                    hdep1: string, rq1: string, fileinput1: string, fiche: string) {
    const ticketintervObject = {
      etat2: '',
      donneur4: '',
      client4: '',
      addr1input: '',
      ville1input: '',
      info1input: '',
      telfixe1: '',
      telportable1: '',
      respons1input: '',
      typecontrat1: '',
      technicien5: '',
      technicien6: '',
      technicien7: '',
      technicien8: '',
      dateappel3: '',
      hinter: '',
      dinterv: '',
      typemat5: '',
      matri2input: '',
      descripanne: '',
      descritravail1: '',
      forfait1input: '',
      quan4input: '',
      oeuvre1input: '',
      quan5input: '',
      piece1input: '',
      quan6input: '',
      name6input: '',
      textarea7input: '',
      harrive1: '',
      hdep1: '',
      rq1: '',
      fileinput1: '',
      fiche: '',
    };
    ticketintervObject.etat2 = etat2;
    ticketintervObject.donneur4 = donneur4;
    ticketintervObject.client4 = client4;
    ticketintervObject.addr1input = addr1input;
    ticketintervObject.ville1input = ville1input;
    ticketintervObject.info1input = info1input;
    ticketintervObject.telfixe1 = telfixe1;
    ticketintervObject.telportable1 = telportable1;
    ticketintervObject.respons1input = respons1input;
    ticketintervObject.typecontrat1 = typecontrat1;
    ticketintervObject.technicien5 = technicien5;
    ticketintervObject.technicien6 = technicien6;
    ticketintervObject.technicien7 = technicien7;
    ticketintervObject.technicien8 = technicien8;
    ticketintervObject.dateappel3 = dateappel3;
    ticketintervObject.hinter = hinter;
    ticketintervObject.dinterv = dinterv;
    ticketintervObject.typemat5 = typemat5;
    ticketintervObject.matri2input = matri2input;
    ticketintervObject.descripanne = descripanne;
    ticketintervObject.descritravail1 = descritravail1;
    ticketintervObject.forfait1input = forfait1input;
    ticketintervObject.quan4input = quan4input;
    ticketintervObject.oeuvre1input = oeuvre1input;
    ticketintervObject.quan5input = quan5input;
    ticketintervObject.piece1input = piece1input;
    ticketintervObject.quan6input = quan6input;
    ticketintervObject.name6input = name6input;
    ticketintervObject.textarea7input = textarea7input;
    ticketintervObject.harrive1 = harrive1;
    ticketintervObject.hdep1 = hdep1;
    ticketintervObject.rq1 = rq1;
    ticketintervObject.fileinput1 = fileinput1;
    ticketintervObject.fiche = fiche;
    this.tickets.push(ticketintervObject);

  }

  saveTicketInstallToServer(ticketinstall: TicketInstall): Observable<TicketInstall> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpTicket.post<TicketInstall>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', ticketinstall, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  saveTicketIntervToServer(ticketinterv: TicketInterv): Observable<TicketInterv> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpTicket.post<TicketInterv>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', ticketinterv, httpOptions)
      .pipe(
        catchError(this.handleError));

  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }



}
