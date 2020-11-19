package com.hackathon.auth.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HomeController {
    @PostMapping
    public void test() {
        System.out.println("qweqewqeqeqeqweq");
    }
}
