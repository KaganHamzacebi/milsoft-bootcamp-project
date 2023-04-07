package com.cart.microservice.repository;

import com.cart.microservice.entity.CartProduct;
import org.springframework.data.repository.CrudRepository;

public interface CartProductRepository extends CrudRepository<CartProduct, Long> {

}
