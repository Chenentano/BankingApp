package com.example.backend.account;
import com.example.backend.account.transfer.TransferRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/bankAccount")
public class AccountController {

    @Qualifier("AccountServiceImpl")
    @Autowired
    private AccountService service;

    @PostMapping("/auth/create")
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        Account createAccount = service.createAccount(account);
        return ResponseEntity.status(HttpStatus.CREATED).body(createAccount);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Account> loginAccount(@RequestBody Account account) {
        try {
            Account loginAccount = service.loginAccount(account);
            return ResponseEntity.ok(loginAccount);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    //obsolete @FutureMe
    @PostMapping("/createBankAccountNumbers")
    public ResponseEntity<Void> updateBankAccountNumbers() {
        service.updateExistingAccounts();
        return ResponseEntity.ok().build();
    }

    @GetMapping("/getById/{accountNumber}")
    public ResponseEntity<?> getAccountByAccountNumber(@PathVariable Long accountNumber) {
        try {
            return ResponseEntity.ok(service.getAccountDetailsByAccountNumber(accountNumber));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Account mit der ID " + accountNumber + " nicht gefunden!");
        }
    }

    @GetMapping("/getByName/{accountName}")
    public ResponseEntity<?> getAccountByAccountName(@PathVariable String accountName) {
        try {
            return ResponseEntity.ok(service.getAccountByName(accountName));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Account mit dem Namen " + accountName + " nicht gefunden!");
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

    @PostMapping("/transfer")
    public ResponseEntity<?> transferMoney(@RequestBody TransferRequest request) {
        try {
            Account sender = service.transferMoney(request);
            return ResponseEntity.ok(sender);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/convertCurrency")
    public Double convertCurrency(@RequestParam String from, @RequestParam String to) {
        return service.convertCurrency(from, to);
    }

}
