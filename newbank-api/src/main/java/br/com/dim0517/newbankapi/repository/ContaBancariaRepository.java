package br.com.dim0517.newbankapi.repository;

import br.com.dim0517.newbankapi.models.ContaBancaria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface ContaBancariaRepository extends JpaRepository<ContaBancaria, Long> {

    @Query(value = "SELECT c FROM ContaBancaria c WHERE c.agencia LIKE :agencia AND c.conta LIKE :conta")
    Double consultarSaldo(@Param("agencia") String agencia, @Param("conta") String conta);

    Optional<ContaBancaria> findByAgenciaAndConta(String agencia, String conta);

}
