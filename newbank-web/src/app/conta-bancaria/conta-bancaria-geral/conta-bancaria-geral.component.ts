import { Component, OnInit } from '@angular/core';
import {ContaBancariaService} from "../conta-bancaria.service";
import {ContaBancaria} from "../../models/ContaBancaria";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Transacao} from "../../models/Transacao";
import {MessagesService} from "../../services/message.service";
import {error} from "util";

@Component({
  selector: 'app-conta-bancaria-geral',
  templateUrl: './conta-bancaria-geral.component.html',
  styleUrls: ['./conta-bancaria-geral.component.css']
})
export class ContaBancariaGeralComponent implements OnInit {

  saldo: number;
  user: any;
  contaBancaria: ContaBancaria;

  // Forms
  creditarForm: FormGroup;
  debitarForm: FormGroup;
  transferirForm: FormGroup;

  constructor(private contaBancariaService: ContaBancariaService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private message: MessagesService) {

    this.user = this.userService.getUserData();
    this.creditarForm = this.formBuilder.group({
      valorCredito: ''
    });
    this.debitarForm = this.formBuilder.group({
      valorDebito: ''
    });
    this.transferirForm = this.formBuilder.group({
      agenciaDestino: '',
      contaDestino: '',
      valorTransferencia: ''
    });
  }

  ngOnInit() {
    this.consultarSaldo();
  }

  consultarSaldo() {
    this.contaBancariaService.getSaldo(this.user.agencia, this.user.conta).subscribe(
      response => {
        this.saldo = response.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      }
    );
  }

  creditar(formCredito) {
    console.log(formCredito.valorCredito);
    console.log(this.user);

    let transacao = new Transacao(this.user.agencia, this.user.conta, null, null, formCredito.valorCredito);

    this.contaBancariaService.creditar(transacao).subscribe(
      response => {
        if (response != null) {
          this.contaBancaria = response;
          this.saldo = this.contaBancaria.saldo;
          this.creditarForm.reset();

          this.message.success('Valor creditado com sucesso!');
        } else {
          this.message.error('Valor Não Creditado!', 'O valor não pode ser creditado a sua conta. Tente novamente!', {});
        }
      }
    );
  }

  debitar(formDebito) {

    let transacao = new Transacao(this.user.agencia, this.user.conta, null, null, formDebito.valorDebito);

    this.contaBancariaService.debitar(transacao).subscribe(
      response => {
        console.log(response);
        if (response != null) {
          this.contaBancaria = response;
          this.saldo = this.contaBancaria.saldo;
          this.debitarForm.reset();

          this.message.success("Valor debitado com sucesso!");
        } else {
          this.message.error('Valor Não Debitado!', 'Valor errado', {});
        }
      });
  }

  transferir(formTransferencia) {
    console.log(formTransferencia.valorTransferencia);
    console.log(this.user);

    let transacao = new Transacao(this.user.agencia, this.user.conta, formTransferencia.agenciaDestino,
      formTransferencia.contaDestino, formTransferencia.valorTransferencia);

    this.contaBancariaService.transferir(transacao).subscribe(
      response => {
        console.log(response);
        if (response != null) {
          this.contaBancaria = response;
          this.saldo = this.contaBancaria.saldo;
          this.transferirForm.reset();

          this.message.success(`Sucesso ao transferir para Agência ${formTransferencia.agenciaDestino} e Conta ${formTransferencia.contaDestino}.`);
        } else {
          this.message.error('Valor Não Transferido!', 'O valor não pode ser transferido para a conta destino. Tente novamente!', {});
        }
      });
  }
}
