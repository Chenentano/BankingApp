package com.example.backend.service;

import com.example.backend.entity.Account;
import com.example.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("AccountServiceImpl")
public class AccountServiceImpl implements AccountService{

    @Autowired
    AccountRepository repo;


    @Override
    public Account createAccount(Account account) {
        return repo.save(account);
    }

    @Override
    public Account getAccountDetailsByAccountNumber(Long accountNumber) {
        Optional<Account> account = repo.findById(accountNumber);
        if(account.isEmpty()){
            throw new RuntimeException("Account nicht gefunden!");
        }
        return account.get();
    }

    @Override
    public List<Account> getAllAccountDetails() {
        return repo.findAll();
    }

    @Override
    public Account depositMoney(Long accountNumber, Double amount) {
        Optional<Account> account = repo.findById(accountNumber);
        if(account.isEmpty()){
            throw new RuntimeException("Account nicht gefunden!");
        }
        Account depositAccount = account.get();
        double totalBalance =  depositAccount.getBalance()+amount;
        depositAccount.setBalance(totalBalance);
        repo.save(depositAccount);

        return depositAccount;

    }

    @Override
    public Account withdrawMoney(Long accountNumber, Double amount) {
        Optional<Account> account = repo.findById(accountNumber);
        if(account.isEmpty()){
            throw new RuntimeException("Account nicht gefunden!");
        } else if (account.get().getBalance() < amount) {
            throw new RuntimeException("Die Summe zum abbuchen ist größer als das Guthaben!");
        }
        Account depositAccount = account.get();
        double totalBalance =  depositAccount.getBalance()-amount;
        depositAccount.setBalance(totalBalance);
        repo.save(depositAccount);

        return depositAccount;

    }

    @Override
    public boolean closeAccount(Long accountNumber) {
        if (repo.existsById(accountNumber)) {
            repo.deleteById(accountNumber);
            return true;
        }
        return false;
    }
}