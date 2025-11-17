import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardsService } from '../services/guards.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const statusAuthorization: boolean = inject(GuardsService).isAuthorization();

  if (statusAuthorization) {
    return true;
  } else {
    return router.navigate(['/authorization']);
  }
};
