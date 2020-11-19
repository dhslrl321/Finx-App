package com.hackathon.banking.model.network.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BankingRefreshRequest {
    private String client_id;
    private String client_secret;
    private String refresh_token;
    private String scope;
    private String grant_type;
}
