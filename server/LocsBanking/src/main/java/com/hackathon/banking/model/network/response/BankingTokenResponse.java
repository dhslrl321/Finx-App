package com.hackathon.banking.model.network.response;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BankingTokenResponse {
    private String access_token;
    private String token_type;
    private String expires_in;
    private String refresh_token;
    private String scope;
    private String user_seq_no;

    private String rsp_code;
    private String rsp_message;
}
