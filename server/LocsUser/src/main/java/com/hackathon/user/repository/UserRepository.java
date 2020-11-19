package com.hackathon.user.repository;

import com.hackathon.user.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);
}
