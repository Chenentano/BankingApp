package com.example.backend.account.transfer;

import com.example.backend.account.Account;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class TransferRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    @JsonBackReference
    private Account account;

    private String senderAccountNumber;
    private String receiverAccountNumber;
    private Double amount;
    private Double fee;
    private String msg;
    private String transactionId;
}