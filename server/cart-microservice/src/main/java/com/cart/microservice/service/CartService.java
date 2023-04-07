package com.cart.microservice.service;

import com.cart.microservice.dto.CartDto;
import com.cart.microservice.dto.CheckoutDto;

public interface CartService {
    long insert(CartDto cartDto);

    CartDto find(long cartId);

    CartDto addCartProduct(long cartId, long productId);

    CartDto removeCartProduct(long cartId, long productId);

    CartDto checkout(CheckoutDto checkoutDto);

}
