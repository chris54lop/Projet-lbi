import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Utilisateur} from '../utilisateur/utilisateur';


@Injectable ()
export class ListUtilisateurService {

  headers: any;
  utilisateurs: Utilisateur[];

  constructor(private httpUtilisateur: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  // Fonction POST
  saveUtilisateurToServer(utilisateur: Utilisateur): Observable<Utilisateur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpUtilisateur.post<Utilisateur>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/ajoutUser', utilisateur, httpOptions)
      .pipe(
        catchError(this.handleError));

  }
  // Fonction GET
  getUtilisateurFromServer(): Observable<Utilisateur[]> {
    return this.httpUtilisateur.get('http://localhost:8080/IntranetLbiWeb/rest/Intranet/getUser').pipe(
      map((res) => {
          this.utilisateurs = res as Utilisateur[];
          return this.utilisateurs;
        }),
        catchError(this.handleError));
  }

  // Fonction PUT
  updateUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    console.log(utilisateur);
    return this.httpUtilisateur.put<Utilisateur>('http://localhost:8080/IntranetLbiWeb/rest/Intranet/majUser', utilisateur, httpOptions)
      .pipe(map((res) => {
        const theUtilisateur = this.utilisateurs.find((item) => {
          return +item['id_user'] === +utilisateur['id_user'];
        });
        if (theUtilisateur) {
          theUtilisateur['name7'] = utilisateur['name7'];
          theUtilisateur['prenom5'] = utilisateur['prenom5'];
          theUtilisateur['niv'] = utilisateur['niv'];
          theUtilisateur['login'] = utilisateur['login'];
          theUtilisateur['password'] = utilisateur['password'];
        }
        return this.utilisateurs;
      }),
        catchError(this.handleError));
  }
// Fonction DELETE (pas encore testé)
  delete(id_user: number): Observable<Utilisateur[]> {
    const params = new HttpParams()
      .set('id_user', id_user.toString());
    return this.httpUtilisateur.delete('http://localhost:8080/IntranetLbiWeb/rest/Intranet/deleteUser', { params: params })
      .pipe(map(res => {
        const filteredUtilisateurs = this.utilisateurs.filter((utilisateur) => {
          return +utilisateur['id_user'] !== +id_user;
        });
        return this.utilisateurs = filteredUtilisateurs;
      }),
        catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }



}
