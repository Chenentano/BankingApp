package com.example.backend.service;

import com.example.backend.entity.Account;
import com.example.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return null;
    }

    @Override
    public List<Account> getAllAccountDetails() {
        return List.of();
    }

    @Override
    public Account depositMoney(Long accountNumber, Double amount) {
        return null;
    }

    @Override
    public Account withdrawMoney(Long accountNumber, Double amount) {
        return null;
    }

    @Override
    public void closeAccount(Long accountNumber) {

    }
}
