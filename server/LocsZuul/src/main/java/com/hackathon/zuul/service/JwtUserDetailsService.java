package com.hackathon.zuul.service;

import com.hackathon.zuul.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Value("${base.url}")
    private String BASE_URL;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        /*
         * TODO : RestTemplate 으로 User Server에 username을 사용하여 Request하고 Response로 User 객체를 리턴받는다.
         */
        User user = restTemplate.getForObject(BASE_URL + "/user/api/{username}", User.class, username);

        /*
         * TODO : null에 Response로 받은 User 객체의 Username 과 Password가 삽입된다.
         */

        if (user != null) {
            return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
        } else {
            return null;
        }
    }
}
