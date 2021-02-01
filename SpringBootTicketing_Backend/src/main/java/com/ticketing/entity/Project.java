package com.ticketing.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ticketing.enums.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "projects")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer"},ignoreUnknown = true)

public class Project  extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String projectName;

    @Column(unique = true)
    private String projectCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manager_id")
    private User assignedManager;

    private String projectDetail;

    @Enumerated(value = EnumType.STRING)
    private Status projectStatus;

    private Date startDate;

    private Date endDate;
}
