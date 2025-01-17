package com.java.birthday.controller;

import com.java.birthday.model.Theme;
import com.java.birthday.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class ThemeController {

    @Autowired
    private ThemeService themeService;

    @GetMapping("/getAllThemes")
    public ResponseEntity<List<Theme>> getAllThemes() {
        List<Theme> themes = themeService.getAllThemes();
        return ResponseEntity.ok().body(themes);
    }

    @PostMapping("/bookTheme")
    public ResponseEntity<Theme> addTheme(@RequestBody Theme theme) {
        Theme newTheme = themeService.addTheme(theme);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTheme);
    }

    @PutMapping("/editTheme/{id}")
    public ResponseEntity<Theme> updateTheme(@PathVariable("id") int id, @RequestBody Theme updatedTheme) {
        Theme theme = themeService.updateTheme(id, updatedTheme);
        if (theme != null) {
            return ResponseEntity.ok().body(theme);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteTheme/{id}")
    public ResponseEntity<Void> deleteTheme(@PathVariable("id") int id) {
        themeService.deleteTheme(id);
        return ResponseEntity.noContent().build();
    }

    // @GetMapping("/getBookedTheme")
    // public ResponseEntity<Theme> getBookedTheme() {
    //     Theme bookedTheme = themeService.getBookedTheme();
    //     if (bookedTheme != null) {
    //         return ResponseEntity.ok().body(bookedTheme);
    //     }
    //     return ResponseEntity.notFound().build();
    // }
}

