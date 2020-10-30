import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./login/auth.service";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'newbank-web';

  mostrarMenu: boolean = false;

  contaOrigem: string;
  contaDestino: string;
  operacao: number;
  valor: number;

  selected = 1;

  options: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.menuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
