package com.ticketing.controller;


import com.ticketing.entity.User;
import com.ticketing.repository.RoleRepository;
import com.ticketing.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    public UserController(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    UserRepository userRepository;
    RoleRepository roleRepository;


    @GetMapping()
    ResponseEntity<List<User>>getUsers(){
        return ResponseEntity.ok(userRepository.findAll());
    }


    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@Param(value = "id")String username){
        return ResponseEntity.ok(userRepository.findByUsername(username));
    }


    @PostMapping()
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return ResponseEntity.ok(userRepository.save(user));
    }


}
