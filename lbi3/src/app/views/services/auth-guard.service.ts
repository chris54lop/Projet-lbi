import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) { }

  canActivate( // Renvoie un boolean qui permet à l'utilisateur d'accéder aux autres pages (si boolean === true)
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
