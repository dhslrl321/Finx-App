package com.hackathon.banking.model.network.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BankingAccountListRequest {
    private String user_seq_no;
}
