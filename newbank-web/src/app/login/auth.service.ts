import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "../models/usuario";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  menuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  logar(usuario: Usuario) {
    console.log(usuario);

    if (usuario.nome === 'jotape' &&
      usuario.senha === '123') {
      this.usuarioAutenticado = true;

      this.menuEmitter.emit(true);

      this.router.navigate(['/conta-bancaria']);
    } else {
      this.usuarioAutenticado = false;

      this.menuEmitter.emit(false);
    }
    console.log(this.usuarioAutenticado);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
