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
@Table(name ="themeTable")
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int themeId;

    @Column(nullable = false)
    private String themeName;

    @Column(nullable = false)
    private String themeImageURL;

    @Column(nullable = false)
    private String themeDescription;

    @Column(nullable = false)
    private String themePhotographer;

    @Column(nullable = false)
    private String themeVideographer;

    @Column(nullable = false)
    private String themeReturnGift;

    @Column(nullable = false)
    private Long themeCost;
}
