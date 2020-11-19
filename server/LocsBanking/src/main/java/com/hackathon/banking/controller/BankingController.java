package com.hackathon.banking.controller;

import com.hackathon.banking.model.dto.TokenDto;
import com.hackathon.banking.service.AccountService;
import com.hackathon.banking.service.SpendingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BankingController {
    @Autowired
    AccountService accountService;

    @Autowired
    SpendingService spendingService;

    @GetMapping("/{username}")
    public TokenDto getAccount(@PathVariable String username) {
        return accountService.getAccount(username);
    }
}
