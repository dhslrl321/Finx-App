package com.hackathon.banking.repository;

import com.hackathon.banking.model.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account findByFintechUseNum(String FintechUseNum);
}
