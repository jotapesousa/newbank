package br.com.dim0517.newbankapi.services;

import br.com.dim0517.newbankapi.models.ContaBancaria;
import br.com.dim0517.newbankapi.repository.ContaBancariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
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

    public ContaBancaria verificarConta(String agencia, String conta) {
        return contaBancariaRepository.findByAgenciaAndConta(agencia, conta).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Conta não encontrada!"));
    }

    public ContaBancaria buscarPorId(Long idConta) {
        return contaBancariaRepository.findById(idConta).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Conta não encontrada!"));
    }

    public Double consultarSaldo(String agencia, String conta) throws ResponseStatusException {
        Optional<ContaBancaria> contaBancariaOptional = contaBancariaRepository.findByAgenciaAndConta(agencia, conta);

        if (contaBancariaOptional.isPresent()) {
            return contaBancariaOptional.get().getSaldo();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não foi possível consultar o seu saldo!");
        }
    }

    public ContaBancaria creditar(String agencia, String conta, Double valor) {
        Optional<ContaBancaria> contaBancariaOptional = contaBancariaRepository.findByAgenciaAndConta(agencia, conta);

        ContaBancaria contaBancaria = null;
        if (contaBancariaOptional.isPresent()) {
            contaBancaria = contaBancariaOptional.get();
            contaBancaria.creditar(valor);
            contaBancariaRepository.save(contaBancaria);
        }

        return contaBancaria;
    }

    public ContaBancaria debitar(String agencia, String conta, Double valor) throws ResponseStatusException {
        Optional<ContaBancaria> contaBancariaOptional = contaBancariaRepository.findByAgenciaAndConta(agencia, conta);

        ContaBancaria contaBancaria = null;
        if (contaBancariaOptional.isPresent()) {
            contaBancaria = contaBancariaOptional.get();

            if (valor <= contaBancaria.getSaldo()) {
                contaBancaria.debitar(valor);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Operação não realizada! Seu Saldo é Insuficiente.");
            }
            contaBancariaRepository.save(contaBancaria);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Conta Inexistente. Verifique os dados e faça uma nova tentativa!");
        }

        return contaBancaria;
    }

    public ContaBancaria transferir(String agenciaOrigem, String contaOrigem,
                                    String agenciaDestino, String contaDestino, Double valor) throws ResponseStatusException {
        ContaBancaria contaBancaria;
        try {
            this.creditar(agenciaDestino, contaDestino, valor);
            contaBancaria = this.debitar(agenciaOrigem, contaOrigem, valor);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.MULTI_STATUS, "Não foi possível realizar a transferência.");
        }
        return contaBancaria;
    }

    public List<ContaBancaria> listarContasBancarias() {
        return contaBancariaRepository.findAll();
    }
}
