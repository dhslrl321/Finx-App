package com.hackathon.banking.model.dto;

import com.hackathon.banking.model.entity.Token;
import lombok.*;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TokenDto {
    private Integer id;
    private String username;
    private String access_token;
    private String refresh_token;
    private String user_seq_num;

    private List<AccountDto> lists;

    public Token toEntity() {
        return Token.builder()
                .username(username)
                .access_token(access_token)
                .refresh_token(refresh_token)
                .user_seq_num(user_seq_num)
                .build();
    }
}
