import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Utilisateur} from '../utilisateur/utilisateur';


@Injectable ()
export class AuthService {

  /*private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;*/

  headers: any;

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  isAuth = false;

  /*login(username: string, mdp: string) {
    return this.httpClient.post<{access_token: string}>('url', {username, mdp}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }
  logout() {
    localStorage.removeItem('access_token');
  }
  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }*/
  signIn() {
    return new Promise(
      (resolve, reject) => {
        this.isAuth = true;
        resolve(true);
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }

 /* login(username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    */

}
