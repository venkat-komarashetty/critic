import { Component, OnInit } from '@angular/core';
import { CookieHandlerService } from './../../services/cookie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cookieHandlerService: CookieHandlerService,
              private route: Router) { }

  ngOnInit() {
    console.log('Get Token :', this.cookieHandlerService.getToken());
    if (this.cookieHandlerService.getToken() === '') {
      this.route.navigateByUrl('admin');
    }
  }

  onLogout() {
    this.cookieHandlerService.deleteToken();
    this.route.navigateByUrl('admin');
  }

}
