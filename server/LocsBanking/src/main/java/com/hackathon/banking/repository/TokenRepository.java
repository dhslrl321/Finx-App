package com.hackathon.banking.repository;

import com.hackathon.banking.model.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, Integer> {

    Token findByUsername(String username);
}
