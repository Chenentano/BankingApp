package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.Pattern;

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
    @Pattern(regexp = "\\S*", message = "Spaces are not allowed in the account name")
    private String accountName;
    @Column(length = 50,nullable=false)
    private String email;
    @Column(length = 65,nullable=false)
    private String password;
    private double balance;

}