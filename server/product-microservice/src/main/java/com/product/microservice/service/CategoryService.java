package com.product.microservice.service;

import com.product.microservice.dto.CategoryDto;

import java.util.List;

public interface CategoryService {
    List<CategoryDto> list();
}
