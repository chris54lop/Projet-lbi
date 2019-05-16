import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Donneur} from '../clients/donneur';

@Injectable ()
export class ListDonneurOrdreService {

  headers: any;
  donneurs: Donneur[];

  constructor(private httpDonneur: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  // Fonction POST
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
  // Fonction GET
  getDonneurFromServer(): Observable<Donneur[]> {
    return this.httpDonneur.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getDonneur').pipe(
      map((res) => {
        this.donneurs = res as Donneur[];
        return this.donneurs;
      }),
      catchError(this.handleError));
  }
  // Fonction PUT
  updateDonneur(donneur: Donneur): Observable<Donneur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpDonneur.put<Donneur>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/majDonneur', donneur, httpOptions)
      .pipe(map((res) => {
          const theDonneur = this.donneurs.find((item) => {
            return +item['id_donneur'] === +donneur['id_donneur'];
          });
          if (theDonneur) {
            theDonneur['intitinput'] = donneur['intitinput'];
            theDonneur['name2input'] = donneur['name2input'];
            theDonneur['prenom2input'] = donneur['prenom2input'];
            theDonneur['email2input'] = donneur['email2input'];
            theDonneur['tel2input'] = donneur['tel2input'];
            theDonneur['fct2input'] = donneur['fct2input'];
            theDonneur['name3input'] = donneur['name3input'];
            theDonneur['prenom3input'] = donneur['prenom3input'];
            theDonneur['email3input'] = donneur['email3input'];
            theDonneur['tel3input'] = donneur['tel3input'];
            theDonneur['fct3input'] = donneur['fct3input'];
            theDonneur['name4input'] = donneur['name4input'];
            theDonneur['prenom4input'] = donneur['prenom4input'];
            theDonneur['email4input'] = donneur['email4input'];
            theDonneur['tel4input'] = donneur['tel4input'];
            theDonneur['fct4input'] = donneur['fct4input'];
          }
          return this.donneurs;
        }),
        catchError(this.handleError));
  }

  // maj donneur http://localhost:8080/IntranetLbiWeb/rest/Intranet/majDonneur

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }

}
