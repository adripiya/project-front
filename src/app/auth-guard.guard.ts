import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

import {Observable} from 'rxjs';
import { LoginService } from './core/providers/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!sessionStorage.getItem('token')) {
      return this.router.navigate(['/login']).then(() => false);
    } else {
      this.loginService.rol = sessionStorage.getItem('rol');
      this.loginService.userId = sessionStorage.getItem('userId');
      this.loginService.userName = sessionStorage.getItem('userName');

    }
    return true;
  }
}