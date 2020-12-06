package br.com.dim0517.newbankapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transacao {

    private String agenciaOrigem;
    private String contaOrigem;
    private String agenciaDestino;
    private String contaDestino;
    private Double valor;

}
