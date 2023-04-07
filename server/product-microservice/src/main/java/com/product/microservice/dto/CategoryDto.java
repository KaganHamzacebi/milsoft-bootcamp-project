package com.product.microservice.dto;

import com.product.microservice.entity.Category;
import com.product.microservice.util.Mapper;

import java.util.List;

public class CategoryDto {
    private long categoryId;
    private String categoryName;

    private List<ProductDto> productList;

    public static CategoryDto toDto(Category entity) {
        return Mapper.getInstance().map(entity, CategoryDto.class);
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<ProductDto> getProductList() {
        return productList;
    }

    public void setProductList(List<ProductDto> productList) {
        this.productList = productList;
    }

    public Category toEntity() {
        return Mapper.getInstance().map(this, Category.class);
    }
}

