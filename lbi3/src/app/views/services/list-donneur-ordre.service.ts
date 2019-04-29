import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Donneur} from '../clients/donneur';

@Injectable ()
export class ListDonneurOrdreService {

  headers: any;

  constructor(private httpDonneur: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  private donneurs = [];


  donneursSubject = new Subject<any[]>();

  emitDonneurSubject() {
    this.donneursSubject.next(this.donneurs.slice());
  }

  addDonneur(intitinput: string, name2input: string, prenom2input: string, email2input: string, tel2input: string, fct2input: string, name3input: string,
             prenom3input: string, email3input: string, tel3input: string, fct3input: string, name4input: string,
             prenom4input: string, email4input: string, tel4input: string, fct4input: string) {
    const donneurObject = {
      intitinput: '',
      name2input: '',
      prenom2input: '',
      email2input: '',
      tel2input: '',
      fct2input: '',
      name3input: '',
      prenom3input: '',
      email3input: '',
      tel3input: '',
      fct3input: '',
      name4input: '',
      prenom4input: '',
      email4input: '',
      tel4input: '',
      fct4input: '',
    };
    donneurObject.intitinput = intitinput;
    donneurObject.name2input = name2input;
    donneurObject.prenom2input = prenom2input;
    donneurObject.email2input = email2input;
    donneurObject.tel2input = tel2input;
    donneurObject.fct2input = fct2input;
    donneurObject.name3input = name3input;
    donneurObject.prenom3input = prenom3input;
    donneurObject.email3input = email3input;
    donneurObject.tel3input = tel3input;
    donneurObject.fct3input = fct3input;
    donneurObject.name4input = name4input;
    donneurObject.prenom4input = prenom4input;
    donneurObject.email4input = email4input;
    donneurObject.tel4input = tel4input;
    donneurObject.fct4input = fct4input;
    this.donneurs.push(donneurObject);
  }

  saveDonneurToServer(donneur: Donneur): Observable<Donneur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpDonneur.post<Donneur>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajouterDonneur', donneur, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}
