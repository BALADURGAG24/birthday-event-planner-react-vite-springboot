package com.java.birthday.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="eventTable")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;

    @Column(nullable = false)
    private String eventName;

    @Column(nullable = false)
    private String applicantName;

    @Column(nullable = false)
    private String applicantAddress;

    @Column(nullable = false)
    private String applicantMobile;

    @Column(nullable = false)
    private String applicantEmail;

    @Column(nullable = false)
    private String eventAddress;

    @Column(nullable = false)
    private Date eventDate;

    @Column(nullable = false)
    private String eventTime;

    @Column(nullable = false)
    private int eventMenuId;

    @Column(nullable = false)
    private int addonId;

    @Column(nullable = false)
    private String eventCost;
}
