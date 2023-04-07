package com.product.microservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
        value = HttpStatus.NOT_FOUND,
        reason = "Requested product does not exist"
)
public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(long productId) {
        super("Could not found the product with id: " + productId);
    }
}
