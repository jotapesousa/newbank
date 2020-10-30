import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Usuario} from "../models/usuario";
import {ContaBancaria} from "../models/ContaBancaria";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contaBancaria: ContaBancaria = new ContaBancaria();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logar() {
    this.authService.logar(this.contaBancaria);
  }
}
