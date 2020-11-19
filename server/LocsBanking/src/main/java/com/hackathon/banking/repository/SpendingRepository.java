package com.hackathon.banking.repository;

import com.hackathon.banking.model.entity.Spending;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpendingRepository extends JpaRepository<Spending, Integer> {
}
