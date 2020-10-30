import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// RECOMMENDED
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { ContaBancariaRoutingModule } from './conta-bancaria-routing.module';
import { ContaBancariaGeralComponent } from './conta-bancaria-geral/conta-bancaria-geral.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ContaBancariaGeralComponent],
  imports: [
    CommonModule,
    ContaBancariaRoutingModule,
    AccordionModule.forRoot(),
    FormsModule,
  ]
})
export class ContaBancariaModule { }
