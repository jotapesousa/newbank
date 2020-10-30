import { Component, OnInit } from '@angular/core';
import {ContaBancariaService} from "../conta-bancaria.service";
import {Router} from "@angular/router";
import {ContaBancaria} from "../../models/ContaBancaria";

@Component({
  selector: 'app-conta-bancaria-geral',
  templateUrl: './conta-bancaria-geral.component.html',
  styleUrls: ['./conta-bancaria-geral.component.css']
})
export class ContaBancariaGeralComponent implements OnInit {

  saldo: number;
  contaBancaria: ContaBancaria = new ContaBancaria();

  constructor(private contaBancariaService: ContaBancariaService,
              private router: Router) {
    this.contaBancaria.agencia = this.router.getCurrentNavigation().extras.queryParams.agencia;
    this.contaBancaria.conta = this.router.getCurrentNavigation().extras.queryParams.conta;
  }

  ngOnInit() {
    this.consultarSaldo();
  }

  consultarSaldo() {
    this.contaBancariaService.getSaldo(this.contaBancaria.agencia, this.contaBancaria.conta).subscribe(
      response => {
        this.saldo = response.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      }
    );
  }

}
