package com.product.microservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller("baseController")
@CrossOrigin(origins = "http://localhost:3000")
public class BaseController {

    public <T> ResponseEntity responseEntity(T entity) {
        return ResponseEntity.status(HttpStatus.OK).body(entity);
    }
}