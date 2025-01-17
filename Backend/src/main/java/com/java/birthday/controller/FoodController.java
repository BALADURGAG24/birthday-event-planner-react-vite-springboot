package com.java.birthday.controller;

import com.java.birthday.model.Food;
import com.java.birthday.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @PostMapping("/addMenu")
    public ResponseEntity<Food> addFoodItem(@RequestBody Food food) {
        Food newFood = foodService.addFoodItem(food);
        return ResponseEntity.status(HttpStatus.CREATED).body(newFood);
    }

    @GetMapping("/getMenu")
    public ResponseEntity<List<Food>> getAllFoodItems() {
        List<Food> foodItems = foodService.getAllFoodItems();
        return ResponseEntity.ok().body(foodItems);
    }

    @PutMapping("/editMenu/{id}")
    public ResponseEntity<Food> updateFoodItem(@PathVariable("id") int id, @RequestBody Food updatedFood) {
        Food foodItem = foodService.updateFoodItem(id, updatedFood);
        if (foodItem != null) {
            return ResponseEntity.ok().body(foodItem);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteMenu/{id}")
    public ResponseEntity<Void> deleteFoodItem(@PathVariable("id") int id) {
        foodService.deleteFoodItem(id);
        return ResponseEntity.noContent().build();
    }
}
