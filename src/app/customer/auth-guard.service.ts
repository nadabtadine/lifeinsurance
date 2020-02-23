import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AccountverificationService } from './accountverification.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AccountverificationService, public router: Router) { }

  canActivate(route, state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }

}
