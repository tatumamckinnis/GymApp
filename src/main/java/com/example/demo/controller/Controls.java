package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class Controls {
    @GetMapping("/api/time")
    public String time() {
        return new Date() + "\n";
    }
}