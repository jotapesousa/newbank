package br.com.dim0517.newbankapi.controller;

import br.com.dim0517.newbankapi.models.ContaBancaria;
import br.com.dim0517.newbankapi.services.ContaBancariaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.websocket.server.PathParam;
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

    @PutMapping("/creditar")
    public ContaBancaria creditar(@PathParam("agenciaCredito") String agenciaCredito,
                                  @PathParam("contaCredito") String contaCredito,
                                  @PathParam("valor") Double valor) {
        return contaBancariaService.creditar(agenciaCredito, contaCredito, valor);
    }

    @PutMapping("/debitar")
    public ContaBancaria debitar(@PathParam("agenciaDebito") String agenciaDebito,
                                 @PathParam("contaDebito") String contaDebito,
                                 @PathParam("valor") Double valor) throws ResponseStatusException {
        ContaBancaria contaBancaria;
        try {
            contaBancaria =  contaBancariaService.debitar(agenciaDebito, contaDebito, valor);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.MULTI_STATUS, e.getMessage());
        }
        return contaBancaria;
    }

    @PutMapping("/transferir")
    public void transferir(@PathParam("agenciaOrigem") String agenciaOrigem,
                           @PathParam("contaOrigem") String contaOrigem,
                           @PathParam("agenciaDestino") String agenciaDestino,
                           @PathParam("contaDestino") String contaDestino,
                           @PathParam("valor") Double valor) {
        try {
            contaBancariaService.transferir(agenciaOrigem, contaOrigem, agenciaDestino, contaDestino, valor);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(e.getStatus(), e.getMessage());
        }
    }

    @GetMapping("/listarTodas")
    public List<ContaBancaria> listaContasBancarias() {
        return contaBancariaService.listarContasBancarias();
    }
}
