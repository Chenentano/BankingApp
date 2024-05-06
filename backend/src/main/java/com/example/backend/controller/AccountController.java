package com.example.backend.controller;

import com.example.backend.entity.Account;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/account")
public class AccountController {

    @PostMapping("/create")
    public Account createAccount(@RequestBody Account account) {
        return null;
    }

}
