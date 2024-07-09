package com.example.demo.repository;


import com.example.demo.model.Buddy;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BuddyRepository extends JpaRepository<Buddy, Long> {
    List<Buddy> findByUserId(Long userId);
}

