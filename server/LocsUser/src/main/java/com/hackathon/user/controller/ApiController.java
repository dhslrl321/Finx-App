package com.hackathon.user.controller;

import com.hackathon.user.model.dto.UserDto;
import com.hackathon.user.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/{username}")
    public UserDto loadUserByUsername(@PathVariable("username") String username) {
        return apiService.loadUserByUsername(username);
    }
}
