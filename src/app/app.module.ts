import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

// Services
import { CookieService } from 'ngx-cookie-service';
// Directives

// Pipes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
