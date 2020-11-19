package com.hackathon.banking.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Account {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "fintech_use_num")
    private String fintechUseNum;

    @Column(name = "account_num_masked")
    private String accountNumMasked;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Token token;

    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Spending> spendings = new ArrayList<>();

    @Builder
    public Account(String fintechUseNum, String accountNumMasked, List<Spending> spendings) {
        this.fintechUseNum = fintechUseNum;
        this.accountNumMasked = accountNumMasked;
        if (spendings != null) {
            this.spendings.addAll(spendings);
        }
    }
}
