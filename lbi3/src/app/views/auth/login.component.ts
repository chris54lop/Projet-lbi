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

  onClick() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['dashboard']);
      }
    );
  }
}
 // http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial
