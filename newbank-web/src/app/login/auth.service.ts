import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "../models/usuario";
import {Router} from "@angular/router";
import {ContaBancaria} from "../models/ContaBancaria";
import {ContaBancariaService} from "../conta-bancaria/conta-bancaria.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private contaBancaria: ContaBancaria;

  menuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
              private contaBancariaService: ContaBancariaService) {

  }

  logar(conta: ContaBancaria) {

    this.contaBancariaService.verificarConta(conta.agencia, conta.conta).subscribe(
      response => {
        if (response != null) {
          this.contaBancaria = response;
        }

        if (this.contaBancaria.agencia === conta.agencia && this.contaBancaria.conta === conta.conta && conta.senha.length > 3) {
          this.usuarioAutenticado = true;

          this.menuEmitter.emit(true);

          this.router.navigate(['/conta-bancaria'],
            { queryParams: { agencia: this.contaBancaria.agencia, conta: this.contaBancaria.conta } });
        } else {
          this.usuarioAutenticado = false;

          this.menuEmitter.emit(false);
        }
      }
    );
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
