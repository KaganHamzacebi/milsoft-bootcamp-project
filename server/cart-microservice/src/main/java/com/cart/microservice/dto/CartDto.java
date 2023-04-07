package com.cart.microservice.dto;

import com.cart.microservice.entity.Cart;
import com.cart.microservice.entity.CartProduct;
import com.cart.microservice.enums.CartStatus;
import com.cart.microservice.util.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class CartDto {
    private long cartId;
    private String customerName;
    private long cardNumber;
    private CartStatus cartStatus = CartStatus.NEW;

    private List<CartProductDto> productList = new ArrayList<>();

    public static CartDto toDto(Cart entity) {
        return Mapper.getInstance().map(entity, CartDto.class);
    }

    public static List<CartProductDto> toDtoList(List<CartProduct> cartProductList) {
        return cartProductList.stream()
                .map(cartProduct -> Mapper.getInstance().map(cartProduct, CartProductDto.class))
                .collect(Collectors.toList());
    }

    public long getCartId() {
        return cartId;
    }

    public void setCartId(long cartId) {
        this.cartId = cartId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public long getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(long cardNumber) {
        this.cardNumber = cardNumber;
    }

    public CartStatus getCartStatus() {
        return cartStatus;
    }

    public void setCartStatus(CartStatus cartStatus) {
        this.cartStatus = cartStatus;
    }

    public List<CartProductDto> getProductList() {
        return productList;
    }

    public void setProductList(List<CartProductDto> productList) {
        this.productList = productList;
    }

    public Cart toEntity() {
        return Mapper.getInstance().map(this, Cart.class);
    }
}
