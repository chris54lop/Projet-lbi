import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable ()
export class ListTicketService {

  private ticketsinterv; ticketsinstall;

  constructor() {
  }

  ticketsSubject = new Subject<any[]>();


  private tickets = [];

  emitTicketSubject() {
    this.ticketsSubject.next(this.tickets.slice());
  }

  addTicketinstall( select17: string, select2: string, select3: string, hfaddr: string, villeinput: string, infoinput: string,
                    tel5input: string, tel8input: string, responsinput: string, select4: string, technicien1: string, technicien2: string, technicien3: string, technicien4: string, dateinput: string,
                    timeinput: string, date1input: string, select18: string, matri1input: string, textarea1input: string, textarea2input: string,
                    forfaitinput: string, quan1input: string, oeuvreinput: string, quan2input: string, pieceinput: string,  quan3input: string, name5input: string, textarea3input: string, time2input: string,
                    time3input: string, textarea4input: string, fileinput: string, fiche: string) {
    const ticketinstallObject = {
      select17: '',
      select2: '',
      select3: '',
      hfaddr: '',
      villeinput: '',
      infoinput: '',
      tel5input: '',
      tel8input: '',
      responsinput: '',
      select4: '',
      technicien1: '',
      technicien2: '',
      technicien3: '',
      technicien4: '',
      dateinput: '',
      timeinput: '',
      date1input: '',
      select18: '',
      matri1input: '',
      textarea1input: '',
      textarea2input: '',
      forfaitinput: '',
      quan1input: '',
      oeuvreinput: '',
      quan2input: '',
      pieceinput: '',
      quan3input: '',
      name5input: '',
      textarea3input: '',
      time2input: '',
      time3input: '',
      textarea4input: '',
      fileinput: '',
      fiche: '',
    };
    ticketinstallObject.select17 = select17;
    ticketinstallObject.select2 = select2;
    ticketinstallObject.select3 = select3;
    ticketinstallObject.hfaddr = hfaddr;
    ticketinstallObject.villeinput = villeinput;
    ticketinstallObject.infoinput = infoinput;
    ticketinstallObject.tel5input = tel5input;
    ticketinstallObject.tel8input = tel8input;
    ticketinstallObject.responsinput = responsinput;
    ticketinstallObject.select4 = select4;
    ticketinstallObject.technicien1 = technicien1;
    ticketinstallObject.technicien2 = technicien2;
    ticketinstallObject.technicien3 = technicien3;
    ticketinstallObject.technicien4 = technicien4;
    ticketinstallObject.dateinput = dateinput;
    ticketinstallObject.timeinput = timeinput;
    ticketinstallObject.date1input = date1input;
    ticketinstallObject.select18 = select18;
    ticketinstallObject.matri1input = matri1input;
    ticketinstallObject.textarea1input = textarea1input;
    ticketinstallObject.textarea2input = textarea2input;
    ticketinstallObject.forfaitinput = forfaitinput;
    ticketinstallObject.quan1input = quan1input;
    ticketinstallObject.oeuvreinput = oeuvreinput;
    ticketinstallObject.quan2input = quan2input;
    ticketinstallObject.pieceinput = pieceinput;
    ticketinstallObject.quan3input = quan3input;
    ticketinstallObject.name5input = name5input;
    ticketinstallObject.textarea3input = textarea3input;
    ticketinstallObject.time2input = time2input;
    ticketinstallObject.time3input = time3input;
    ticketinstallObject.textarea4input = textarea4input;
    ticketinstallObject.fileinput = fileinput;
    ticketinstallObject.fiche = fiche;
    this.tickets.push(ticketinstallObject);


  }

  addTicketinterv( select19: string, select8: string, select9: string, addr1input: string, ville1input: string, info1input: string,
                    tel6input: string, tel7input: string, respons1input: string, select20: string, technicien5: string, technicien6: string, technicien7: string, technicien8: string, date2input: string,
                    time5input: string, date3input: string, select10: string, matri2input: string, textarea5input: string, textarea6input: string,
                    forfait1input: string, quan4input: string, oeuvre1input: string, quan5input: string, piece1input: string, quan6input: string, name6input: string, textarea7input: string, time6input: string,
                    time7input: string, textarea8input: string, fileinput1: string, fiche: string) {
    const ticketintervObject = {
      select19: '',
      select8: '',
      select9: '',
      addr1input: '',
      ville1input: '',
      info1input: '',
      tel6input: '',
      tel7input: '',
      respons1input: '',
      select20: '',
      technicien5: '',
      technicien6: '',
      technicien7: '',
      technicien8: '',
      date2input: '',
      time5input: '',
      date3input: '',
      select10: '',
      matri2input: '',
      textarea5input: '',
      textarea6input: '',
      forfait1input: '',
      quan4input: '',
      oeuvre1input: '',
      quan5input: '',
      piece1input: '',
      quan6input: '',
      name6input: '',
      textarea7input: '',
      time6input: '',
      time7input: '',
      textarea8input: '',
      fileinput1: '',
      fiche: '',
    };
    ticketintervObject.select19 = select19;
    ticketintervObject.select8 = select8;
    ticketintervObject.select9 = select9;
    ticketintervObject.addr1input = addr1input;
    ticketintervObject.ville1input = ville1input;
    ticketintervObject.info1input = info1input;
    ticketintervObject.tel7input = tel7input;
    ticketintervObject.tel6input = tel6input;
    ticketintervObject.respons1input = respons1input;
    ticketintervObject.select20 = select20;
    ticketintervObject.technicien5 = technicien5;
    ticketintervObject.technicien6 = technicien6;
    ticketintervObject.technicien7 = technicien7;
    ticketintervObject.technicien8 = technicien8;
    ticketintervObject.date2input = date2input;
    ticketintervObject.time5input = time5input;
    ticketintervObject.date3input = date3input;
    ticketintervObject.select10 = select10;
    ticketintervObject.matri2input = matri2input;
    ticketintervObject.textarea5input = textarea5input;
    ticketintervObject.textarea6input = textarea6input;
    ticketintervObject.forfait1input = forfait1input;
    ticketintervObject.quan4input = quan4input;
    ticketintervObject.oeuvre1input = oeuvre1input;
    ticketintervObject.quan5input = quan5input;
    ticketintervObject.piece1input = piece1input;
    ticketintervObject.quan6input = quan6input;
    ticketintervObject.name6input = name6input;
    ticketintervObject.textarea7input = textarea7input;
    ticketintervObject.time6input = time6input;
    ticketintervObject.time7input = time7input;
    ticketintervObject.textarea8input = textarea8input;
    ticketintervObject.fileinput1 = fileinput1;
    ticketintervObject.fiche = fiche;
    this.tickets.push(ticketintervObject);

  }
}
