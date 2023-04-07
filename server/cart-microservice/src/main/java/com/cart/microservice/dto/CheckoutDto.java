package com.cart.microservice.dto;

import java.util.List;

public class CheckoutDto {
    private String customerName;
    private long cardNumber;
    private List<CartProductDto> productList;

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

    public List<CartProductDto> getProductList() {
        return productList;
    }

    public void setProductList(List<CartProductDto> productList) {
        this.productList = productList;
    }
}
