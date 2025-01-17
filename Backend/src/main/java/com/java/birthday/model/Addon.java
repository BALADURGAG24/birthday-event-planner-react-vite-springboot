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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="addonTable")
public class Addon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addonId;

    @Column(nullable = false)
    private String addonName;

    @Column(nullable = false)
    private String addonDescription;

    @Column(nullable = false)
    private String addonPrice;
}