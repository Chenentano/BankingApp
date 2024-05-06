package com.example.backend.service;

import com.example.backend.entity.Account;

import java.util.List;

public class AccountServiceImpl implements AccountService{


    @Override
    public Account createAccount(Account account) {
        return null;
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
