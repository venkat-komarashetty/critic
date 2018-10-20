import { Injectable } from '@angular/core';
import { CommonHttpService } from './../common-http.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private commomHttpService: CommonHttpService) { }

  testCall(url) {
    return this.commomHttpService.getRequest(url);
  }

  adminLogin(url, params) {
    return this.commomHttpService.postRequest(url, params);
  }
}
