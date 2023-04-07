package com.cart.microservice.dto;

import com.cart.microservice.entity.Product;
import com.cart.microservice.util.Mapper;
import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.List;
import java.util.stream.Collectors;

public class ProductDto {
    private long productId;
    private String productName;
    private double salesPrice;
    private long categoryId;
    @JsonBackReference
    private CategoryDto category;

    public static List<Product> toEntityList(List<ProductDto> productDtoList) {
        return productDtoList.stream()
                .map((productDto -> Mapper.getInstance().map(new ProductDto(), Product.class)))
                .collect(Collectors.toList());
    }

    public static ProductDto toDto(Product entity) {
        return Mapper.getInstance().map(entity, ProductDto.class);
    }

    public static List<ProductDto> toDtoList(List<Product> productList) {
        return productList.stream()
                .map(product -> Mapper.getInstance().map(new Product(), ProductDto.class))
                .collect(Collectors.toList());
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
        return Mapper.getInstance().map(new ProductDto(), Product.class);
    }
}

