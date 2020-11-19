package com.hackathon.user.service;

import com.hackathon.user.model.dto.UserDto;
import com.hackathon.user.model.entity.User;
import com.hackathon.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public UserDto register(User user) {
        User userCheck = userRepository.findByUsername(user.getUsername());

        if (userCheck == null) {
            /* TODO : 회원가입 가능 */
            User response = userRepository.save(user);

            return UserDto.builder()
                    .id(response.getId())
                    .username(response.getUsername())
                    .password(response.getPassword())
                    .created_at(response.getCreated_at())
                    .build();
        } else {
            /* TODO : 회원가입 불가능 */
            return UserDto.builder()
                    .id(null)
                    .username(null)
                    .password(null)
                    .created_at(null)
                    .build();
        }
    }

    public UserDto login(User user) {
        User usernameCheck = userRepository.findByUsername(user.getUsername());
        User passwordCheck = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());

        if (usernameCheck == null || passwordCheck == null) {
            return UserDto.builder()
                    .id(null)
                    .username(null)
                    .password(null)
                    .created_at(null)
                    .build();
        } else {
            return UserDto.builder()
                    .id(passwordCheck.getId())
                    .username(passwordCheck.getUsername())
                    .password(passwordCheck.getPassword())
                    .created_at(passwordCheck.getCreated_at())
                    .build();
        }
    }
}
