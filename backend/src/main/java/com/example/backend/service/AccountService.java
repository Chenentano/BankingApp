package com.example.backend.service;

import com.example.backend.entity.Account;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("AccountService")
public interface AccountService {

    public Account createAccount(Account account);
    public Account loginAccount(Account account);
    public Account getAccountDetailsByAccountNumber(Long accountNumber);
    public List<Account> getAllAccountDetails();
    public Account depositMoney(Long accountNumber, Double amount);
    public Account withdrawMoney(Long accountNumber, Double amount);
    public boolean closeAccount(Long accountNumber);

}