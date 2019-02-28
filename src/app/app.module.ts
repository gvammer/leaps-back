import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { BaseCookieOptions, CookieOptions } from 'angular2-cookie/services/base-cookie-options';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: "BASE_URL", useValue: "http://annaniks.com:10327/" },
    CookieService,
    { provide: CookieOptions, useValue: BaseCookieOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//http://annaniks.com:10327/