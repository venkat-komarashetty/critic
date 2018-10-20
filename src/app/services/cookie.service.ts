import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieHandlerService {
  cookieName = 'imcToken';
  constructor(private cookie: CookieService) { }

  getToken(): string {
    return this.cookie.get(this.cookieName);
  }

  setToken(value: string): void {
    this.cookie.set(this.cookieName, value);
  }

  deleteToken(): void {
    this.cookie.delete(this.cookieName);
  }
}
