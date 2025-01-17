package com.java.birthday.service;

import com.java.birthday.model.Theme;
import com.java.birthday.repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemeService {

    @Autowired
    private ThemeRepository themeRepository;

    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    public Theme addTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    public Theme getThemeById(int id) {
        return themeRepository.findById(id).orElse(null);
    }

    public Theme updateTheme(int id, Theme updatedTheme) {
        Theme existingTheme = themeRepository.findById(id).orElse(null);
        if (existingTheme != null) {
            existingTheme.setThemeName(updatedTheme.getThemeName());
            existingTheme.setThemeImageURL(updatedTheme.getThemeImageURL());
            existingTheme.setThemeDescription(updatedTheme.getThemeDescription());
            existingTheme.setThemePhotographer(updatedTheme.getThemePhotographer());
            existingTheme.setThemeVideographer(updatedTheme.getThemeVideographer());
            existingTheme.setThemeReturnGift(updatedTheme.getThemeReturnGift());
            existingTheme.setThemeCost(updatedTheme.getThemeCost());
            return themeRepository.save(existingTheme);
        }
        return null;
    }

    public void deleteTheme(int id) {
        themeRepository.deleteById(id);
    }

    public Theme getBookedTheme() {
        return null;
    }
}
