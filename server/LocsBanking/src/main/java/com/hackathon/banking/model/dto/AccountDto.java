package com.hackathon.banking.model.dto;

import com.hackathon.banking.model.entity.Account;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountDto {

    private Integer id;

    private String fintech_use_num;
    private String account_num_masked;
    private String balance;

    public Account toEntity() {
        return Account.builder()
                .fintechUseNum(fintech_use_num)
                .accountNumMasked(account_num_masked)
                .build();
    }
}
