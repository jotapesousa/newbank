package br.com.dim0517.newbankapi.services;

import br.com.dim0517.newbankapi.models.ContaBancaria;
import br.com.dim0517.newbankapi.repository.ContaBancariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ContaBancariaService {

    private final ContaBancariaRepository contaBancariaRepository;

    @Autowired
    public ContaBancariaService(ContaBancariaRepository contaBancariaRepository) {
        this.contaBancariaRepository = contaBancariaRepository;
    }

    public ContaBancaria criar(ContaBancaria contaBancaria) {
        return contaBancariaRepository.save(contaBancaria);
    }

    public ContaBancaria buscarPorId(Long idConta) {
        return contaBancariaRepository.findById(idConta).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Conta não encontrada!"));
    }

    public ContaBancaria buscarPorAgenciaEConta(String agencia, String conta) {
        return contaBancariaRepository.findByAgenciaAndConta(agencia, conta).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Conta não encontrada!"));
    }

    public Double consultarSaldo(Long idConta) {
        ContaBancaria contaBancaria = buscarPorId(idConta);

        return contaBancaria.getSaldo();
    }

    public ContaBancaria creditar(Long idContaCredito, Double valor) {
        ContaBancaria contaBancaria = buscarPorId(idContaCredito);
        contaBancaria.creditar(valor);
        contaBancariaRepository.save(contaBancaria);

        return contaBancaria;
    }

    public ContaBancaria debitar(Long idContaDebito, Double valor) throws Exception {
        ContaBancaria contaBancaria = buscarPorId(idContaDebito);

        if (valor <= contaBancaria.getSaldo()) {
            contaBancaria.debitar(valor);
        } else {
            throw new Exception("Operação não realizada! Seu Saldo é Insuficiente.");
        }
        contaBancariaRepository.save(contaBancaria);

        return contaBancaria;
    }

    public void transferir(Long idContaOrigem, Long idContaDestino, Double valor) throws Exception {
        contaBancariaRepository.save( creditar(idContaDestino, valor) );
        contaBancariaRepository.save( debitar(idContaOrigem, valor) );

    }
}
