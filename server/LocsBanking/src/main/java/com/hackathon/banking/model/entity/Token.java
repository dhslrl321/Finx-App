package com.hackathon.banking.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Token {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String access_token;
    private String refresh_token;
    private String user_seq_num;

    @OneToMany(mappedBy = "token", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Account> accounts = new ArrayList<>();

    @Builder
    public Token(String username, String access_token, String refresh_token, String user_seq_num, List<Account> accounts) {
        this.username = username;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.user_seq_num = user_seq_num;
        if (accounts != null) {
            this.accounts.addAll(accounts);
        }
    }
}
