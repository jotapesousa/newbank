package br.com.dim0517.newbankapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ContaBancaria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String agencia;

    private String conta;

    private Double saldo;


    public void creditar(Double valor) {
        this.saldo += valor;
    }

    public void debitar(Double valor) {
        this.saldo -= valor;
    }
}
