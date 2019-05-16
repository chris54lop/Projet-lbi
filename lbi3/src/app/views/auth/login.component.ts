import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onClick() { // fonction permettant de se connecter (simulation de connexion)
    this.authService.signIn().then( // signIn définit dans le service AuthService
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['dashboard']); // ramène l'utilisateur vers le tableau de bord
      }
    );
  }
}
 // http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial
