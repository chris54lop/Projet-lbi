import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
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

  getUtilisateurFromServer(): Observable<Utilisateur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpUtilisateur.get<Utilisateur>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  updateUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpUtilisateur.put<Utilisateur>('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', httpOptions)
      .pipe(map((res) => {
        const theUtilisateur = this.utilisateurs.find((item) => {
          return +item['id'] === +utilisateur['id'];
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

  delete(id: number): Observable<Utilisateur[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.httpUtilisateur.delete('http://localhost:8080/LbiWeb/rest/HelloWorld/ajoutMat', { params: params })
      .pipe(map(res => {
        const filteredUtilisateurs = this.utilisateurs.filter((utilisateur) => {
          return +utilisateur['id'] !== +id;
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
