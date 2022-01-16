package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/")
    public String mainPage() {
        System.out.println("mainPage 입니다.");
        return "메인 페이지 입니다.";
    }
}
