package com.product.microservice.service;

import com.product.microservice.dto.CategoryDto;
import com.product.microservice.entity.Category;
import com.product.microservice.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<CategoryDto> list() {
        List<CategoryDto> categoryDtoList = new ArrayList<>();
        for (Category category : categoryRepository.findAll()) {
            categoryDtoList.add(CategoryDto.toDto(category));
        }
        return categoryDtoList;
    }
}
