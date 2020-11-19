package com.hackathon.banking.service;

import com.hackathon.banking.model.dto.AccountDto;
import com.hackathon.banking.model.dto.TokenDto;
import com.hackathon.banking.model.entity.Account;
import com.hackathon.banking.model.entity.Token;
import com.hackathon.banking.model.network.request.BankingAccountListRequest;
import com.hackathon.banking.model.network.response.BankingAccountListResponse;
import com.hackathon.banking.model.network.response.BankingBalanceResponse;
import com.hackathon.banking.repository.AccountRepository;
import com.hackathon.banking.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService {
    private static int count = 10000;

    @Value("${banking.url.v2}")
    private String BANKING_URL_V2;

    @Value("${banking.url}")
    private String BANKING_URL;

    @Value("${banking.usecode}")
    private String USE_CODE;

    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    TokenService tokenService;

    @Autowired
    RestTemplate restTemplate;

    public TokenDto getAccount(String username) {
        Token token = tokenRepository.findByUsername(username);

        if (token == null) {
            return null;
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token.getAccess_token());

        HttpEntity<BankingAccountListRequest> request = new HttpEntity<>(headers);

        ResponseEntity<BankingAccountListResponse> responseEntity = restTemplate.exchange(BANKING_URL_V2 + "/user/me?user_seq_no={user_seq_no}", HttpMethod.GET, request, BankingAccountListResponse.class, token.getUser_seq_num());
        BankingAccountListResponse response = responseEntity.getBody();

        if (response != null) {
            if (response.getRsp_code() != null) {
                if (response.getRsp_code().equals("O0003")) {
                    /* NOTE : 만료 */
                    tokenService.refreshToken(token);
                    return null;
                } else {
                    /* NOTE : 정상일 때 */
                    TokenDto resData = TokenDto.builder()
                            .id(token.getId())
                            .username(token.getUsername())
                            .access_token(null)
                            .refresh_token(null)
                            .user_seq_num(token.getUser_seq_num())
                            .build();

                    List<AccountDto> resInput = new ArrayList<>();

                    for (AccountDto element : response.getRes_list()) {
                        Account saveEntity = Account.builder()
                                .fintechUseNum(element.getFintech_use_num())
                                .accountNumMasked(element.getAccount_num_masked())
                                .build();

                        Account check = accountRepository.findByFintechUseNum(element.getFintech_use_num());

                        if (check == null) {
                            saveEntity.setToken(token);
                            Account input = accountRepository.save(saveEntity);

                            String balance = getBalance(input.getFintechUseNum(), headers);

                            resInput.add(AccountDto.builder().id(input.getId()).fintech_use_num(input.getFintechUseNum()).account_num_masked(input.getAccountNumMasked()).balance(balance).build());
                        } else {
                            check.setFintechUseNum(element.getFintech_use_num());
                            check.setAccountNumMasked(element.getAccount_num_masked());
                            Account input = accountRepository.save(check);

                            String balance = getBalance(input.getFintechUseNum(), headers);

                            resInput.add(AccountDto.builder().id(input.getId()).fintech_use_num(input.getFintechUseNum()).account_num_masked(input.getAccountNumMasked()).balance(balance).build());
                        }
                    }
                    resData.setLists(resInput);

                    return resData;
                }
            } else {
                System.out.println(response.toString());
                return null;
            }
        } else {
            return null;
        }
    }

    private String getBalance(String fintech_use_num, HttpHeaders headers) {
        StringBuilder bank_tran_id = new StringBuilder(USE_CODE);
        bank_tran_id.append(String.format("%09d", count++));

        LocalDateTime date = LocalDateTime.now();
        StringBuilder tran_dtime = new StringBuilder();
        tran_dtime.append(date.getYear());
        tran_dtime.append(date.getMonthValue());
        tran_dtime.append(date.getDayOfMonth());
        tran_dtime.append(String.format("%02d", date.getHour()));
        tran_dtime.append(date.getMinute());
        tran_dtime.append(String.format("%02d", date.getSecond()));

        HttpEntity<?> request = new HttpEntity<>(headers);

        ResponseEntity<BankingBalanceResponse> responseEntity = restTemplate.exchange(BANKING_URL_V2 + "/account/balance/fin_num?bank_tran_id={bank_tran_id}&fintech_use_num={fintech_use_num}&tran_dtime={tran_dtime}", HttpMethod.GET, request, BankingBalanceResponse.class, bank_tran_id, fintech_use_num, tran_dtime);
        BankingBalanceResponse response = responseEntity.getBody();

        if (response == null) {
            return null;
        }
        System.out.println(response.toString());

        return response.getBalance_amt();
    }
}
