import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GuardsService {
  public isAuthorization(): boolean {
    const token: string = sessionStorage.getItem('authToken') || '';
    return !!token && token.trim() !== '';
  }
}
