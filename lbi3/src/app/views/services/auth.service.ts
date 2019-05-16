import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable ()
export class AuthService {

  headers: any;

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  isAuth = false;

  signIn() { // Simule la connexion sur le site
    return new Promise(
      (resolve, reject) => {
        this.isAuth = true;
        resolve(true);
      }
    );
  }

  signOut() { // Simule la déconnexion
    this.isAuth = false;
  }

}
