package com.ticketing.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ticketing.enums.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(value = {"hibernateLazyInitializer"},ignoreUnknown = true)

public class Task extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String taskSubject;

    private String taskDetail;

    @Enumerated(value = EnumType.STRING)
    private Status taskStatus;

    private Date assignedDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User assignedEmployee;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    private Project project;
}
