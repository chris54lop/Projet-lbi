import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable ()
export class ListDemandeService {

  constructor() {
  }
  demandesSubject = new Subject<any[]>();


  private demandes = [];

  emitDemandeSubject() {
    this.demandesSubject.next(this.demandes.slice());
  }

  addDemande( radios: string, date1: string, recep: string, client: string, radios1: string,
              descri: string) {
    const demandeObject = {
      radios: '',
      date1: '',
      recep: '',
      client: '',
      radios1: '',
      descri: '',

    };
    demandeObject.radios = radios;
    demandeObject.date1 = date1;
    demandeObject.recep = recep;
    demandeObject.client = client;
    demandeObject.radios1 = radios1;
    demandeObject.descri = descri;
    this.demandes.push(demandeObject);


  }

}
