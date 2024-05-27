package com.example.backend.service;

import com.example.backend.entity.Account;
import com.example.backend.entity.CurrencyExchange;
import com.example.backend.entity.TransferRequest;
import com.example.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.security.SecureRandom;
import java.util.List;
import java.util.Optional;


@Service("AccountServiceImpl")
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository repo;

    @Override
    public Account createAccount(Account account) {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        account.setPassword(encoder.encode(account.getPassword()));
        if (account.getBankAccountNumber() == null || account.getBankAccountNumber().isEmpty()) {
            account.setBankAccountNumber(generateBankAccountNumber());
        }
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
        if (account.isEmpty()) {
            throw new RuntimeException("Account nicht gefunden!");
        }
        return account.get();
    }

    @Override
    public Account getAccountByName(String accountName) {
        Optional<Account> account = repo.findByAccountName(accountName);
        if (account.isPresent()) {
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
        if (account.isEmpty()) {
            throw new RuntimeException("Account nicht gefunden!");
        }
        Account depositAccount = account.get();
        BigDecimal totalBalance = depositAccount.getBalance().add(BigDecimal.valueOf(amount));
        depositAccount.setBalance(totalBalance);
        repo.save(depositAccount);

        return depositAccount;
    }

    @Override
    public Account withdrawMoney(Long accountNumber, Double amount) {
        Optional<Account> account = repo.findById(accountNumber);
        if (account.isEmpty()) {
            throw new RuntimeException("Account nicht gefunden!");
        } else if (account.get().getBalance().compareTo(BigDecimal.valueOf(amount)) < 0) {
            throw new RuntimeException("Die Summe zum abbuchen ist größer als das Guthaben!");
        }
        Account depositAccount = account.get();
        BigDecimal totalBalance = depositAccount.getBalance().subtract(BigDecimal.valueOf(amount));
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
    public Account transferMoney(TransferRequest request) {
        Account sender = repo.findByBankAccountNumber(request.getSenderAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("Ungültige Nummer: " + request.getSenderAccountNumber()));
        Account recipient = repo.findByBankAccountNumber(request.getReceiverAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("Ungültige Nummer: " + request.getReceiverAccountNumber()));
        if (sender.getBalance().compareTo(BigDecimal.valueOf(request.getAmount())) < 0) {
            throw new IllegalArgumentException("Sender hat nicht genug Geld!");
        }
        sender.setBalance(sender.getBalance().subtract(BigDecimal.valueOf(request.getAmount())));
        recipient.setBalance(recipient.getBalance().add(BigDecimal.valueOf(request.getAmount())));

        TransferRequest transferRequest = new TransferRequest();
        transferRequest.setMsg(request.getMsg());
        transferRequest.setTransactionId(request.getTransactionId());
        transferRequest.setAccount(sender);
        transferRequest.setSenderAccountNumber(request.getSenderAccountNumber());
        transferRequest.setReceiverAccountNumber(request.getReceiverAccountNumber());
        transferRequest.setAmount(request.getAmount());
        sender.getTransferRequests().add(transferRequest);

        repo.save(sender);
        repo.save(recipient);

        return sender;
    }

    private String generateBankAccountNumber() {
        return new SecureRandom()
                .ints(0,9)
                .limit(10)
                .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                .toString();
    }

    public void updateExistingAccounts() {
        List<Account> accounts = repo.findAll();

        for (Account account : accounts) {
            if (account.getBankAccountNumber() == null || account.getBankAccountNumber().isEmpty()) {
                account.setBankAccountNumber(generateBankAccountNumber());
                repo.save(account);
            }
        }
    }

    @Override
    public Double convertCurrency(String from, String to) {
        return getaDouble(from, to);
    }

    public static Double getaDouble(String from, String to) {

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://v6.exchangerate-api.com/v6/" + System.getenv("CURRENCY_API_KEY") + "/latest/" + from;
        ResponseEntity<CurrencyExchange> response;

        try {
            response = restTemplate.getForEntity(url, CurrencyExchange.class);
            CurrencyExchange responseBody = response.getBody();
            if(responseBody != null) {
                System.out.println(responseBody.toString());
            }
        } catch (HttpClientErrorException.NotFound ex) {
            throw new RuntimeException("API endpoint not found. Please check the base URL and API key.");
        } catch (HttpClientErrorException.Unauthorized ex) {
            throw new RuntimeException("Invalid API key. Please check the API key.");
        } catch (HttpClientErrorException.BadRequest ex) {
            throw new RuntimeException("Invalid currency code. Please check the 'from' and 'to' parameters.");
        } catch (RestClientException ex) {
            throw new RuntimeException("Unable to make a request to the API. Please check your network connection.");
        }

        if (response.getStatusCode().is2xxSuccessful()) {
            if (response.getBody() != null) {
                if (response.getBody().getConversion_rates() != null) {
                    Double rate = response.getBody().getConversion_rates().get(to);
                    if (rate != null) {
                        return rate;
                    } else {
                        throw new RuntimeException("'to' currency rate not found in the response.");
                    }
                } else {
                    throw new RuntimeException("Response does not contain 'rates'.");
                }
            } else {
                throw new RuntimeException("Response body is null.");
            }
        } else {
            throw new RuntimeException("API request was not successful. Returned status code: " + response.getStatusCode());
        }
    }
}





