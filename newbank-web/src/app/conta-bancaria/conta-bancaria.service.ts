import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContaBancariaService {

  api_ref: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }


  public getSaldo(idConta: string): Observable<any>{
    // @ts-ignore
    return this.http.get<Number>(`${this.api_ref}/api/operacoes/${idConta}`);
  }
}
