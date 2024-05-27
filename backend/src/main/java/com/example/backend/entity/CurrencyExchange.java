package com.example.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@NoArgsConstructor
@Getter
@Setter
public class CurrencyExchange {
    private String base;
    private Map<String, Double> conversion_rates;
}
