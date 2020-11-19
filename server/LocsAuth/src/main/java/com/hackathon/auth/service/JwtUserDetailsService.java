package com.hackathon.auth.service;

import com.hackathon.auth.model.User;
import com.hackathon.auth.model.response.JwtResponse;
import com.hackathon.auth.util.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService{

    @Value("${base.url}")
    private String BASE_URL;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return null;
    }

    /*
     * TODO : Register 구현 : RestTemplate으로 user 서버에 데이터 전송 후 저장)
     */
    public ResponseEntity<User> register(User user) {
        User apiResponse = restTemplate.postForObject(BASE_URL + "/user/sign-up", user, User.class);

        if (apiResponse != null) {
            if (apiResponse.getId() == null || apiResponse.getUsername() == null || apiResponse.getPassword() == null || apiResponse.getCreated_at() == null) {
                return new ResponseEntity<>(null, HttpStatus.OK);
            } else {
                /* NOTE : 회원가입 성공한 경우. */
                /* TODO : Banking server 에 username 과 code 를 전송한다.*/

                String bool = restTemplate.getForObject(BASE_URL + "/banking/api/{username}/{code}", String.class, user.getUsername(), user.getCode());

                if (bool != null) {
                    if (bool.equals("false")) {
                        return new ResponseEntity<>(null, HttpStatus.OK);
                    } else {
                        apiResponse.setCode(null);
                        apiResponse.setPassword(null);
                        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
                    }
                } else {

                    return new ResponseEntity<>(null, HttpStatus.OK);
                }
            }
        } else {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    public JwtResponse login(String username, String password) {
        User user = User.builder()
                .id(null)
                .username(username)
                .password(password)
                .created_at(null)
                .build();

        User apiResponse = restTemplate.postForObject(BASE_URL + "/user/sign-in", user, User.class);

        if (apiResponse != null) {
            UserDetails userDetails = new org.springframework.security.core.userdetails.User(apiResponse.getUsername(), apiResponse.getPassword(), new ArrayList<>());
            String token = jwtTokenUtil.generateToken(userDetails);
            return new JwtResponse(token);
        } else {
            return null;
        }
    }
}
