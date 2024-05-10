package com.example.backend.service;

import com.example.backend.entity.Account;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("AccountService")
public interface AccountService {

    Account createAccount(Account account);
    Account loginAccount(Account account) throws Exception;
    Account getAccountDetailsByAccountNumber(Long accountNumber);
    List<Account> getAllAccountDetails();
    Account depositMoney(Long accountNumber, Double amount);
    Account withdrawMoney(Long accountNumber, Double amount);
    boolean closeAccount(Long accountNumber);
    Account transferMoney(Long senderAccountNumber, Long recieverAccountNumber, Double amount);

}