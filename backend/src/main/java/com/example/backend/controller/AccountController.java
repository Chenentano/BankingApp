package com.example.backend.controller;
import com.example.backend.entity.Account;
import com.example.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Qualifier("AccountServiceImpl")
    @Autowired
    AccountService service;

    @PostMapping("/create")
    public Account createAccount(@RequestBody Account account) {
        service.createAccount(account);
        return account;
    }

}