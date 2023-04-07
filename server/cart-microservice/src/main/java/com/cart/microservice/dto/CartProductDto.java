package com.cart.microservice.dto;

import com.cart.microservice.entity.CartProduct;
import com.cart.microservice.util.Mapper;
import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.List;
import java.util.stream.Collectors;

public class CartProductDto {
    private long cartProductId;
    private ProductDto product;

    @JsonBackReference
    private CartDto cart;
    private int salesQuantity;

    public static CartProductDto toDto(CartProduct entity) {
        return Mapper.getInstance().map(entity, CartProductDto.class);
    }

    public static List<CartProduct> toEntityList(List<CartProductDto> cartProductDtoList) {
        return cartProductDtoList.stream()
                .map(cartProductDto -> Mapper.getInstance().map(cartProductDto, CartProduct.class))
                .collect(Collectors.toList());
    }

    public long getCartProductId() {
        return cartProductId;
    }

    public void setCartProductId(long cartProductId) {
        this.cartProductId = cartProductId;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }

    public CartDto getCart() {
        return cart;
    }

    public void setCart(CartDto cart) {
        this.cart = cart;
    }

    public int getSalesQuantity() {
        return salesQuantity;
    }

    public void setSalesQuantity(int salesQuantity) {
        this.salesQuantity = salesQuantity;
    }

    public CartProduct toEntity() {
        return Mapper.getInstance().map(this, CartProduct.class);
    }
}
