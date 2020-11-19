package com.hackathon.user.service;

import com.hackathon.user.model.dto.UserDto;
import com.hackathon.user.model.entity.User;
import com.hackathon.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApiService {
    @Autowired
    UserRepository userRepository;

    public UserDto loadUserByUsername(String username) {

        User user = userRepository.findByUsername(username);

        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .created_at(user.getCreated_at())
                .build();
    }
}
