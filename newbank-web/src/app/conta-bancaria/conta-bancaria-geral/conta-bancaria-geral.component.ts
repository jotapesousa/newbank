import { Component, OnInit } from '@angular/core';
import {ContaBancariaService} from "../conta-bancaria.service";

@Component({
  selector: 'app-conta-bancaria-geral',
  templateUrl: './conta-bancaria-geral.component.html',
  styleUrls: ['./conta-bancaria-geral.component.css']
})
export class ContaBancariaGeralComponent implements OnInit {

  oneAtATime: boolean = true;
  saldo: number;

  constructor(private contaBancariaService: ContaBancariaService) { }

  ngOnInit() {
    this.consultarSaldo();
  }

  consultarSaldo() {
    this.contaBancariaService.getSaldo("2").subscribe(
      response => {
        this.saldo = response.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      }
    );
  }

}
