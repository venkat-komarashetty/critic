import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './../../services/admin/account.service';
import { CookieHandlerService } from './../../services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormHeading = 'admin login';
  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private cookieService: CookieHandlerService,
              private route: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email' : ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onLogin() {
    console.log('Login form values :', this.loginForm.value);
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.accountService.adminLogin('http://localhost:5000/adminLogin', user).subscribe((response) => {
      console.log('Response :', response);
      this.cookieService.setToken(response['token']);
      this.route.navigateByUrl('dashboard');
    });
    }
    // this.accountService.testCall('http://localhost:5000').subscribe((response) => {
    //   console.log('Response :', response);
    // });
  }

}
