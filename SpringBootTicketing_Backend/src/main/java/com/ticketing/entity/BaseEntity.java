package com.ticketing.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
@JsonIgnoreProperties(value = {"insertDateTime","lastUpdateUserId","insertUserId","lastUpdateDateTime","is_deleted"})
public class BaseEntity {


    @Temporal(value=TemporalType.TIMESTAMP)
    private Date insertDateTime;
    private Long lastUpdateUserId;
    private Long insertUserId;
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date lastUpdateDateTime;
    private boolean is_deleted=false;

    @PrePersist
    private void onPrePersist(){

        this.insertDateTime= new Date();
        this.lastUpdateDateTime = new Date();
        this.insertUserId=1L;
        this.lastUpdateUserId=1L;
    }

    @PreUpdate
    private void onPreUpdate(){
        this.lastUpdateDateTime=new Date();
        this.lastUpdateUserId = 1L;
    }

}
