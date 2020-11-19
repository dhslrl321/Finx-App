package com.hackathon.banking.service;

import com.hackathon.banking.model.entity.Token;
import com.hackathon.banking.model.network.response.BankingTokenResponse;
import com.hackathon.banking.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class TokenService {
    @Value("${banking.url}")
    private String BANKING_URL;

    @Value("${banking.url.v2}")
    private String BANKING_URL_V2;

    @Value("${banking.key}")
    private String key;

    @Value("${banking.secret}")
    private String secret;

    @Value("${banking.scope}")
    private String scope;

    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    RestTemplate restTemplate;

    public void refreshToken(Token token) {
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add("client_id", key);
        parameters.add("client_secret", secret);
        parameters.add("refresh_token", token.getRefresh_token());
        parameters.add("scope", scope);
        parameters.add("grant_type", "refresh_token");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        System.out.println(parameters.toSingleValueMap());
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(parameters, headers);

        ResponseEntity<BankingTokenResponse> response = restTemplate.exchange(BANKING_URL + "/oauth/2.0/token", HttpMethod.POST, request, BankingTokenResponse.class);
        BankingTokenResponse bankingResponse = response.getBody();

        if (bankingResponse == null) {

        } else {
            token.setAccess_token(bankingResponse.getAccess_token());
            token.setRefresh_token(bankingResponse.getRefresh_token());
            token.setUser_seq_num(bankingResponse.getUser_seq_no());

            tokenRepository.save(token);
        }
    }
}
