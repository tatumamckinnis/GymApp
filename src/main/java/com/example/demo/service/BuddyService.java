
package com.example.demo.service;

import com.example.demo.model.Buddy;
import com.example.demo.repository.BuddyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuddyService {
    @Autowired
    private BuddyRepository buddyRepository;

    public List<Buddy> getBuddiesForUser(Long userId) {
        return buddyRepository.findByUserId(userId);
    }

    public Buddy addBuddy(Buddy buddy) {
        return buddyRepository.save(buddy);
    }
}

