package com.example.backend.account;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {

    Optional<Account> findByAccountName(String accountName);
    Optional<Account> findByBankAccountNumber(String bankAccountNumber);

}
