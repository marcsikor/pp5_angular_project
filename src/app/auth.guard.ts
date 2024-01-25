import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { SignInStatusService } from './sign-in-status.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  return inject(SignInStatusService).checkCurrentCredentials() ? true : inject(Router).createUrlTree(['/signin'])
};
