package com.cart.microservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
        value = HttpStatus.NOT_FOUND,
        reason = "Requested cart does not exist"
)
public class CartNotFoundException extends RuntimeException {

    public CartNotFoundException(long cartId) {
        super("Could not found the cart with id: " + cartId);
    }
}
