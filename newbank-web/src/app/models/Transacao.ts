export class Transacao {

  constructor(
    public agenciaOrigem: string,
    public contaOrigem: string,
    public agenciaDestino: string,
    public contaDestino: string,
    public valor: number
  ) {}
}
