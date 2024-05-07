package com.example.backend.controller;
import com.example.backend.entity.Account;
import com.example.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bankAccount")
public class AccountController {

    @Qualifier("AccountServiceImpl")
    @Autowired
    AccountService service;

    @PostMapping("/create")
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        Account createAccount = service.createAccount(account);
        return ResponseEntity.status(HttpStatus.CREATED).body(createAccount);
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<?> getAccountByAccountNumber(@PathVariable Long accountNumber) {
        try {
            return ResponseEntity.ok(service.getAccountDetailsByAccountNumber(accountNumber));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Account mit der ID " + accountNumber + " nicht gefunden!");
        }
    }

    @GetMapping("/getAllAccounts")
    public List<Account> getAllAccounts(){
        return service.getAllAccountDetails();
    }

    @PutMapping("/deposit/{accountNumber}/{amount}")
    public Account depositAccount(@PathVariable Long accountNumber, @PathVariable Double amount) {
        return service.depositMoney(accountNumber,amount);
    }

    @PutMapping("/withdraw/{accountNumber}/{amount}")
    public Account withdrawMoney(@PathVariable Long accountNumber, @PathVariable Double amount) {
        return service.withdrawMoney(accountNumber,amount);
    }

    @DeleteMapping("/delete/{accountNumber}")
    public ResponseEntity<String> closeAccount(@PathVariable Long accountNumber) {
        if(service.closeAccount(accountNumber)) {
            return ResponseEntity.status(HttpStatus.OK).body("Account mit der ID: " + accountNumber + " erfolgreich gelöscht!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account mit der ID: " + accountNumber + " nicht gefunden.");
        }
    }
}