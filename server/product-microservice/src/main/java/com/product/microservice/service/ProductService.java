package com.product.microservice.service;

import com.product.microservice.dto.ProductDto;

import java.util.List;

public interface ProductService {
    List<ProductDto> listByCategory(long categoryId);

    List<ProductDto> list();

    ProductDto find(long productId);
}
