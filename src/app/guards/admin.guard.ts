import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const adminStatus = inject(UserService).userAdmin()
  return adminStatus || router.createUrlTree(["/news-feed"]);
};
