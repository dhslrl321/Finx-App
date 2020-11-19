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
public class ApiService {
    @Value("${banking.url}")
    private String BANKING_URL;

    @Value("${banking.key}")
    private String key;

    @Value("${banking.secret}")
    private String secret;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private TokenRepository tokenRepository;

    public String getToken(String username, String code) {
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add("code", code);
        parameters.add("client_id", key);
        parameters.add("client_secret", secret);
        parameters.add("redirect_uri", "http://127.0.0.1:7894/callback");
        parameters.add("grant_type", "authorization_code");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        System.out.println(parameters.toSingleValueMap());
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(parameters, headers);

        ResponseEntity<BankingTokenResponse> response = restTemplate.exchange(BANKING_URL + "/oauth/2.0/token", HttpMethod.POST, request, BankingTokenResponse.class);
        BankingTokenResponse bankingResponse = response.getBody();

        if (bankingResponse != null) {
            System.out.println(bankingResponse.toString());
            if (bankingResponse.getRsp_code() == null) {
                Token token = Token.builder()
                        .username(username)
                        .access_token(bankingResponse.getAccess_token())
                        .refresh_token(bankingResponse.getRefresh_token())
                        .user_seq_num(bankingResponse.getUser_seq_no())
                        .build();

                tokenRepository.save(token);
                return "true";
            } else {
                return "false";
            }
        } else {
            return "false";
        }
    }
}
