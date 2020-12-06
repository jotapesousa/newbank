import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthService} from "./login/auth.service";
import {AuthGuardService} from "./guards/auth-guard.service";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {HttpClientModule} from "@angular/common/http";


export function writeLocalStorge(key: string, value: string) {
  return sessionStorage.setItem(key, value);
}

export function readLocalStorage(key: string) {
  return sessionStorage.getItem(key);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
