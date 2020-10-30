import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContaBancariaGeralComponent} from "./conta-bancaria-geral/conta-bancaria-geral.component";


const routes: Routes = [
  { path: '', component: ContaBancariaGeralComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaBancariaRoutingModule { }
