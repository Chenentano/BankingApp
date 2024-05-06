package com.example.backend.service;

import com.example.backend.entity.Account;

import java.util.List;

public interface AccountService {

    public Account createAccount(Account account);
    public Account getAccountDetailsByAccountNumber(Long accountNumber);
    public List<Account> getAllAccountDetails();
    public Account depositMoney(Long accountNumber, Double amount);
    public Account withdrawMoney(Long accountNumber, Double amount);
    public void closeAccount(Long accountNumber);

}
