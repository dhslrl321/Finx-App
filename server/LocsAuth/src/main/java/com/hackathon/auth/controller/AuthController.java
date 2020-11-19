package com.hackathon.auth.controller;

import com.hackathon.auth.model.User;
import com.hackathon.auth.model.request.JwtRequest;
import com.hackathon.auth.model.response.JwtResponse;
import com.hackathon.auth.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AuthController {

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @PostMapping("/authenticate")
    public JwtResponse createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        return userDetailsService.login(authenticationRequest.getUsername(), authenticationRequest.getPassword());
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        System.out.println(user.getCode());
        return userDetailsService.register(user);
    }
}
