import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// RECOMMENDED
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { ContaBancariaRoutingModule } from './conta-bancaria-routing.module';
import { ContaBancariaGeralComponent } from './conta-bancaria-geral/conta-bancaria-geral.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxCurrencyModule} from "ngx-currency";
import {UserService} from "../services/user.service";
import {MessagesService} from "../services/message.service";


@NgModule({
  declarations: [ContaBancariaGeralComponent],
  imports: [
    CommonModule,
    ContaBancariaRoutingModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: [
    UserService,
    MessagesService,
  ]
})
export class ContaBancariaModule { }
