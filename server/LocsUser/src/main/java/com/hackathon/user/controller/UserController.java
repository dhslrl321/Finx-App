package com.hackathon.user.controller;

import com.hackathon.user.model.dto.UserDto;
import com.hackathon.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/sign-up")
    public UserDto register(@RequestBody UserDto request) {
        return userService.register(request.toEntity());
    }

    @PostMapping("/sign-in")
    public UserDto login(@RequestBody UserDto request) {
        return userService.login(request.toEntity());
    }
}
