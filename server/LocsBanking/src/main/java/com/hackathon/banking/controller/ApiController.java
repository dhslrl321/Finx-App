package com.hackathon.banking.controller;

import com.hackathon.banking.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    ApiService apiService;

    @GetMapping("/{username}/{code}")
    public String getToken(@PathVariable String username, @PathVariable String code) {
        return apiService.getToken(username, code);
    }
}
