package com.ticketing.controller;

import com.ticketing.entity.Role;
import com.ticketing.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "http://localhost:4200")
public class RoleController {


    RoleRepository roleRepository;

    @Autowired
    public RoleController(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }


    @GetMapping
    ResponseEntity<List<Role>> getRoles(){

        return ResponseEntity.ok(roleRepository.findAll());
    }

}
