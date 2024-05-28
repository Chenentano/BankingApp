package com.example.backend.currency;

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
