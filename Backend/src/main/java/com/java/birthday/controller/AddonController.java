package com.java.birthday.controller;

import com.java.birthday.model.Addon;
import com.java.birthday.service.AddonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AddonController {

    @Autowired
    private AddonService addonService;

    @PostMapping("/addAddon")
    public ResponseEntity<Addon> addAddon(@RequestBody Addon addon) {
        Addon newAddon = addonService.addAddon(addon);
        return ResponseEntity.status(HttpStatus.CREATED).body(newAddon);
    }
 
    @GetMapping("/getAddon")
    public ResponseEntity<List<Addon>> getAllAddons() {
        List<Addon> addons = addonService.getAllAddons();
        return ResponseEntity.ok().body(addons);
    }
 
    @PutMapping("/editAddon/{id}")
    public ResponseEntity<Addon> updateAddon(@PathVariable("id") int id, @RequestBody Addon updatedAddon) {
        Addon addon = addonService.updateAddon(id, updatedAddon);
        if (addon != null) {
            return ResponseEntity.ok().body(addon);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteAddon/{id}")
    public ResponseEntity<Void> deleteAddon(@PathVariable("id") int id) {
        addonService.deleteAddon(id);
        return ResponseEntity.noContent().build();
    }
}
