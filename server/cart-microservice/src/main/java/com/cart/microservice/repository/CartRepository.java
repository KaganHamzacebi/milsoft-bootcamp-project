package com.cart.microservice.repository;

import com.cart.microservice.entity.Cart;
import com.cart.microservice.entity.CartProduct;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CartRepository extends CrudRepository<Cart, Long> {
    @Transactional
    @Modifying
    @Query("update Cart c set c.cartId = ?1 where c.productList = ?2")
    void updateCartIdByProductList(long cartId, CartProduct productList);
}
