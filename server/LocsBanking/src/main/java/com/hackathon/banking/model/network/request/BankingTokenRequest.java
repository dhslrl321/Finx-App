package com.hackathon.banking.model.network.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class BankingTokenRequest {
    private String code;

    private String client_id;

    private String client_secret;

    private String redirect_uri;

    private String grant_type;
}
