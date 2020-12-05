package br.com.dim0517.newbankapi.controller;

import br.com.dim0517.newbankapi.models.ContaBancaria;
import br.com.dim0517.newbankapi.repository.ContaBancariaRepository;
import br.com.dim0517.newbankapi.services.ContaBancariaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.websocket.server.PathParam;

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

    @GetMapping("{idConta}")
    public Double saldo(@PathVariable Long idConta) {
        return contaBancariaService.consultarSaldo(idConta);
    }

    @PutMapping("/creditar")
    public ContaBancaria creditar(@PathParam("idContaCredito") Long idContaCredito,
                                  @PathParam("valor") Double valor) {
        return contaBancariaService.creditar(idContaCredito, valor);
    }

    @PutMapping("/debitar")
    public ContaBancaria debitar(@PathParam("idContaDebito") Long idContaDebito,
                                 @PathParam("valor") Double valor) throws Exception {
        ContaBancaria contaBancaria = null;
        try {
            contaBancaria =  contaBancariaService.debitar(idContaDebito, valor);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
        return contaBancaria;
    }

    @PutMapping("/transferir")
    public void transferir(@PathParam("idContaOrigem") Long idContaOrigem,
                           @PathParam("idContaDestino") Long idContaDestino,
                           @PathParam("valor") Double valor) {
        try {
            contaBancariaService.transferir(idContaOrigem, idContaDestino, valor);
        } catch (Exception e) {

        }
    }
}
