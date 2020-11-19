package com.hackathon.banking.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Spending {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer amount;
    private String payment_day;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Account account;

    @Builder
    public Spending(String title, Integer amount, String payment_day) {
        this.title = title;
        this.amount = amount;
        this.payment_day = payment_day;
    }
}
