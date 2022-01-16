package com.example.demo;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

@Builder
//@RequiredArgsConstructor
@AllArgsConstructor
public class DemoModel {

    @NotNull
    private String id;
}
