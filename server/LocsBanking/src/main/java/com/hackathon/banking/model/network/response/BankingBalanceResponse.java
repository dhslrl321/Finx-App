package com.hackathon.banking.model.network.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@ToString
public class BankingBalanceResponse {
    private String balance_amt;
    private String rsp_code;
    private String rsp_message;
}
