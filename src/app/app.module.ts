import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
// Components
import { AppComponent } from './app.component';

// Services

// Directives

// Pipes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   // FormsModule,
   // ReactiveFormsModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
