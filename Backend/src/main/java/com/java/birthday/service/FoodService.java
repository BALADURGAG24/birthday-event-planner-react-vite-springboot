package com.java.birthday.service;

import com.java.birthday.model.Food;
import com.java.birthday.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public List<Food> getAllFoodItems() {
        return foodRepository.findAll();
    }

    public Food addFoodItem(Food food) {
        return foodRepository.save(food);
    }

    public Food getFoodItemById(int id) {
        return foodRepository.findById(id).orElse(null);
    }

    public Food updateFoodItem(int id, Food updatedFood) {
        Food existingFood = foodRepository.findById(id).orElse(null);
        if (existingFood != null) {
            existingFood.setFoodMenuType(updatedFood.getFoodMenuType());
            existingFood.setFoodMenuItems(updatedFood.getFoodMenuItems());
            existingFood.setFoodMenuCost(updatedFood.getFoodMenuCost());
            return foodRepository.save(existingFood);
        }
        return null;
    }

    public void deleteFoodItem(int id) {
        foodRepository.deleteById(id);
    }
}
