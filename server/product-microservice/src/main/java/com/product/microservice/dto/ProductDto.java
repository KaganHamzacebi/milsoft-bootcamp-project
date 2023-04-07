package com.product.microservice.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.product.microservice.entity.Product;
import com.product.microservice.util.Mapper;

public class ProductDto {
    private long productId;
    private String productName;
    private double salesPrice;
    private long categoryId;
    @JsonBackReference
    private CategoryDto category;

    public static ProductDto toDto(Product entity) {
        return Mapper.getInstance().map(entity, ProductDto.class);
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getSalesPrice() {
        return salesPrice;
    }

    public void setSalesPrice(double salesPrice) {
        this.salesPrice = salesPrice;
    }

    public CategoryDto getCategory() {
        return category;
    }

    public void setCategory(CategoryDto category) {
        this.category = category;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public Product toEntity() {
        return Mapper.getInstance().map(this, Product.class);
    }
}

