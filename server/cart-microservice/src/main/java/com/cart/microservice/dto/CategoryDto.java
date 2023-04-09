package com.cart.microservice.dto;

import com.cart.microservice.entity.Category;
import com.cart.microservice.util.Mapper;

import java.util.ArrayList;
import java.util.List;

public class CategoryDto {
    private long categoryId;
    private String categoryName;
    private List<ProductDto> productList = new ArrayList<>();
    private String imagePath;

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

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
        return Mapper.getInstance().map(new CategoryDto(), Category.class);
    }
}

