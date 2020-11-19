package com.hackathon.user.model.dto;

import com.hackathon.user.model.entity.User;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDto {
    private Integer id;
    private String username;
    private String password;
    private LocalDateTime created_at;

    public User toEntity() {
        return User.builder()
                .username(username)
                .password(password)
                .build();
    }
}
