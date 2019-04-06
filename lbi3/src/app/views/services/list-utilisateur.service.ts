import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Utilisateur} from '../utilisateur/utilisateur';


@Injectable ()
export class ListUtilisateurService {

  headers: any;

  constructor(private httpUtilisateur: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  listutilisateurSubject = new Subject<any[]>();


  addUtilisateur( name7: string, prenom5: string, niv: string, password: string) {
    const utilisateurObject = {
      name7: '',
      prenom5: '',
      niv: '',
      password: '',
    };
    utilisateurObject.name7 = name7;
    utilisateurObject.prenom5 = prenom5;
    utilisateurObject.niv = niv;
    utilisateurObject.password = password;
  }
  saveUtilisateurToServer(utilisateur: Utilisateur): Observable<Utilisateur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpUtilisateur.post<Utilisateur>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', utilisateur, httpOptions)
      .pipe(
        catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }



}
