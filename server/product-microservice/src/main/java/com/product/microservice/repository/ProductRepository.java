package com.product.microservice.repository;

import com.product.microservice.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
    public Iterable<Product> getProductsByCategory_CategoryId(long categoryId);
}
