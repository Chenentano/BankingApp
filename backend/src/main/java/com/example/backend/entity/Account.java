package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.Pattern;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "accounts")
@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="account_name", length=20, nullable=false)
    @Pattern(regexp = "\\S+\\b", message = "Spaces are not allowed in the account name")
    private String accountName;

    private String bankAccountNumber;

    @Column(length = 50,nullable=false)
    @NotNull
    @Email
    private String email;

    @Column(length = 65,nullable=false)
    private String password;

    private double balance;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<TransferRequest> transferRequests;

}