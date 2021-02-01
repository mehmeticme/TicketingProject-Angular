package com.ticketing.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ticketing.enums.Gender;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer"},ignoreUnknown = true)

public class User extends BaseEntity{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    @Column(unique = true)
    private String username;
    private String phone;

    @ManyToOne(fetch = FetchType.LAZY,cascade = {CascadeType.DETACH,CascadeType.MERGE})
    @JoinColumn(name = "role_id")
    private Role role;
    private String password;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;
}
