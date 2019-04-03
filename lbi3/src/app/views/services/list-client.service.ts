import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable ()
export class ListClientService {

  constructor() {
  }

  private clients = [];


  clientsSubject = new Subject<any[]>();

  emitClientSubject() {
    this.clientsSubject.next(this.clients.slice());
  }

  addClient( hfetabl: string, hfaddr: string, hfville: string, select7: string, nameinput: string, prenominput: string,
             emailinput: string, telinput: string, fctinput: string, name1input: string, prenom1input: string, email1input: string,
             tel1input: string, fct1input: string) {
    const clientObject = {

      hfetabl: '',
      hfaddr: '',
      hfville: '',
      select7: '',
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
    clientObject.hfetabl = hfetabl;
    clientObject.hfaddr = hfaddr;
    clientObject.hfville = hfville;
    clientObject.select7 = select7;
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

  /*saveClientToServer() {
    this.httpClient
      .put('https://projet-lbi.firebaseio.com//client.json', this.clients)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error)
        }
      );
  }*/
}

