package com.example.backend.controller;
import com.example.backend.entity.Account;
import com.example.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
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
    public ResponseEntity<?> getAccountByID(@PathVariable Long accountNumber) {
        try {
            return ResponseEntity.ok(service.getAccountDetailsByAccountNumber(accountNumber));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Account mit der ID " + accountNumber + " nicht gefunden!");
        }
    }


}