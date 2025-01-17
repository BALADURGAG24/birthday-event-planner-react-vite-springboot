package com.java.birthday.service;

import com.java.birthday.model.Addon;
import com.java.birthday.repository.AddonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AddonService {

    @Autowired
    private AddonRepository addonRepository;

    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }

    public Addon addAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    public Addon getAddonById(int id) {
        return addonRepository.findById(id).orElse(null);
    }

    public Addon updateAddon(int id, Addon updatedAddon) {
        Addon existingAddon = addonRepository.findById(id).orElse(null);
        if (existingAddon != null) {
            existingAddon.setAddonName(updatedAddon.getAddonName());
            existingAddon.setAddonDescription(updatedAddon.getAddonDescription());
            existingAddon.setAddonPrice(updatedAddon.getAddonPrice());
            return addonRepository.save(existingAddon);
        }
        return null;
    }

    public void deleteAddon(int id) {
        addonRepository.deleteById(id);
    }
}