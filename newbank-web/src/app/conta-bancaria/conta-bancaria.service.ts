import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ContaBancaria} from "../models/ContaBancaria";
import {HttpHelper} from "../util/http.helper";
import {Transacao} from "../models/Transacao";

@Injectable({
  providedIn: 'root'
})
export class ContaBancariaService {

  api_ref: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  public verificarConta(agencia: string, conta: string) {
    const params = {'agencia': agencia, 'conta': conta};
    return this.http.get<ContaBancaria>(`${this.api_ref}/api/operacoes/verificarConta`,
      {params: HttpHelper.generateQueryParams(params)});
  }

  public getSaldo(agencia: string, conta: string): Observable<any>{
    const params = {'agencia': agencia, 'conta': conta};
    return this.http.get<Number>(`${this.api_ref}/api/operacoes`,
      {params: HttpHelper.generateQueryParams(params)});
  }

  public creditar(transacao: Transacao): Observable<any> {
    return this.http.put<ContaBancaria>(`${this.api_ref}/api/operacoes/creditar`, transacao);
  }

  public debitar(transacao: Transacao): Observable<any> {
    return this.http.put<ContaBancaria>(`${this.api_ref}/api/operacoes/debitar`, transacao);
  }

  public transferir(transacao: Transacao){
    return this.http.put<ContaBancaria>(`${this.api_ref}/api/operacoes/transferir`, transacao);
  }
}
