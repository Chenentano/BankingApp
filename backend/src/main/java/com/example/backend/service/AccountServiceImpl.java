package com.example.backend.service;

import com.example.backend.entity.Account;
import com.example.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("AccountServiceImpl")
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository repo;



    @Override
    public Account createAccount(Account account) {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        account.setPassword(encoder.encode(account.getPassword()));
        return repo.save(account);
    }


    public Account loginAccount(Account account) throws Exception {
        Optional<Account> userAccountOpt = repo.findByAccountName(account.getAccountName());

        if (userAccountOpt.isPresent()) {

            Account validatedAccount = userAccountOpt.get();
            PasswordEncoder encoder = new BCryptPasswordEncoder();


            if (encoder.matches(account.getPassword(), validatedAccount.getPassword())) {
                return validatedAccount;
            } else {
                throw new RuntimeException("Falsches Passwort!");
            }
        } else {
            throw new Exception("Account nicht gefunden!");
        }
    }


    @Override
    public Account getAccountDetailsByAccountNumber(Long accountNumber) {
        Optional<Account> account = repo.findById(accountNumber);
        if(account.isEmpty()){
            throw new RuntimeException("Account nicht gefunden!");
        }
        return account.get();
    }

    @Override
    public Account getAccountByName(String accountName) {
        Optional<Account> account = repo.findByAccountName(accountName);
        if(account.isPresent()){
            return account.get();
        } else {
            throw new RuntimeException("Account not found!");
        }
    }

    @Override
    public List<Account> getAllAccountDetails() {
        return repo.findAll();
    }

    @Override
    public Account depositMoney(Long accountNumber, Double amount) {
        Optional<Account> account = repo.findById(accountNumber);
        if(account.isEmpty()){
            throw new RuntimeException("Account nicht gefunden!");
        }
        Account depositAccount = account.get();
        double totalBalance =  depositAccount.getBalance()+amount;
        depositAccount.setBalance(totalBalance);
        repo.save(depositAccount);

        return depositAccount;

    }

    @Override
    public Account withdrawMoney(Long accountNumber, Double amount) {
        Optional<Account> account = repo.findById(accountNumber);
        if(account.isEmpty()){
            throw new RuntimeException("Account nicht gefunden!");
        } else if (account.get().getBalance() < amount) {
            throw new RuntimeException("Die Summe zum abbuchen ist größer als das Guthaben!");
        }
        Account depositAccount = account.get();
        double totalBalance =  depositAccount.getBalance()-amount;
        depositAccount.setBalance(totalBalance);
        repo.save(depositAccount);

        return depositAccount;

    }

    @Override
    public boolean closeAccount(Long accountNumber) {
        if (repo.existsById(accountNumber)) {
            repo.deleteById(accountNumber);
            return true;
        }
        return false;
    }

    @Override
    public Account transferMoney(Long senderAccountNumber, Long recieverAccountNumber, Double amount) {
        Account sender = repo.findById(senderAccountNumber)
                .orElseThrow(() -> new IllegalArgumentException("Ungültige Nummer: " + senderAccountNumber));
        Account recipient = repo.findById(recieverAccountNumber)
                .orElseThrow(() -> new IllegalArgumentException("Ungültige Nummer: " + recieverAccountNumber));
        if (sender.getBalance() < amount) {
            throw new IllegalArgumentException("Sender hat nicht genug Geld!");
        }
        sender.setBalance(sender.getBalance() - amount);
        recipient.setBalance(recipient.getBalance() + amount);

        repo.save(sender);
        repo.save(recipient);

        return sender;
    }
}
