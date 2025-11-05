import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GuardsService extends UserService {
  constructor(_http: HttpClient, _router: Router) {
    super(_http, _router);
  }

  public isAuthorization(): boolean {
    return !!this.token && this.token.trim() !== '';
  }
}
