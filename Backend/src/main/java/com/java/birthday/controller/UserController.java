package com.java.birthday.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class UserController {
    // @Autowired
    // private UserService userService;

    // @PostMapping("/login")
    // public boolean adminLogin(@RequestBody User user) {
    //     User existingUser = userService.getUserByEmail(user.getEmail());
    //     return existingUser != null && existingUser.getPassword().equals(user.getPassword());
    // }

    // @PostMapping("/signup")
    // public User adminSignUp(@RequestBody User user) {
    //     if (userService.existsByEmail(user.getEmail())) {
    //         // Handle case where user already exists
    //         return null;
    //     }
    //     return userService.saveUser(user);
    // }
}
