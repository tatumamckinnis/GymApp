
package com.example.demo.controller;

import com.example.demo.model.Buddy;
import com.example.demo.service.BuddyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buddies")
public class UserController {
    @Autowired
    private BuddyService buddyService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<Buddy>> getBuddies(@PathVariable Long userId) {
        return ResponseEntity.ok(buddyService.getBuddiesForUser(userId));
    }

    @PostMapping
    public ResponseEntity<Buddy> addBuddy(@RequestBody Buddy buddy) {
        return ResponseEntity.ok(buddyService.addBuddy(buddy));
    }
}

