package br.com.dim0517.newbankapi.controller;

import br.com.dim0517.newbankapi.models.ContaBancaria;
import br.com.dim0517.newbankapi.models.Transacao;
import br.com.dim0517.newbankapi.services.ContaBancariaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@RequestMapping(value = "api/operacoes")
public class ContaBancariaController {

    private final ContaBancariaService contaBancariaService;

    @Autowired
    public ContaBancariaController(ContaBancariaService contaBancariaService) {
        this.contaBancariaService = contaBancariaService;
    }

    @PostMapping
    public ContaBancaria criar(@RequestBody ContaBancaria contaBancaria) {
        return contaBancariaService.criar(contaBancaria);
    }

    @GetMapping("/verificarConta")
    public ContaBancaria verificarConta(@RequestParam String agencia, @RequestParam String conta) {
        ContaBancaria contaBancaria;
        try {
            contaBancaria = contaBancariaService.verificarConta(agencia, conta);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(e.getStatus(), e.getMessage());
        }
        return contaBancaria;
    }

    @GetMapping
    public Double saldo(@RequestParam String agencia, @RequestParam String conta) {
        Double saldo;
        try {
            saldo = contaBancariaService.consultarSaldo(agencia, conta);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(e.getStatus(), e.getMessage());
        }
        return saldo;
    }

    @PutMapping("/depositar")
    public ContaBancaria depositar(@RequestBody Transacao transacao) {
        return contaBancariaService.depositar(transacao.getAgenciaOrigem(), transacao.getContaOrigem(), transacao.getValor());
    }

    @PutMapping("/debitar")
    public ContaBancaria debitar(@RequestBody Transacao transacao) throws ResponseStatusException {
        ContaBancaria contaBancaria;
        try {
            contaBancaria = contaBancariaService.debitar(transacao.getAgenciaOrigem(), transacao.getContaOrigem(), transacao.getValor());
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.MULTI_STATUS, e.getMessage());
        }
        return contaBancaria;
    }

    @PutMapping("/transferir")
    public ContaBancaria transferir(@RequestBody Transacao transacao) {
        ContaBancaria contaBancaria;
        try {
            contaBancaria = contaBancariaService.transferir(transacao.getAgenciaOrigem(), transacao.getContaOrigem(),
                    transacao.getAgenciaDestino(), transacao.getContaDestino(), transacao.getValor());
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(e.getStatus(), e.getMessage());
        }
        return contaBancaria;
    }

    @GetMapping("/listarTodas")
    public List<ContaBancaria> listaContasBancarias() {
        return contaBancariaService.listarContasBancarias();
    }
}
