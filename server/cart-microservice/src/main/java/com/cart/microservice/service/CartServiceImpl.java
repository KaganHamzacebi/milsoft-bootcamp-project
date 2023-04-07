package com.cart.microservice.service;

import com.cart.microservice.dto.CartDto;
import com.cart.microservice.dto.CartProductDto;
import com.cart.microservice.dto.CheckoutDto;
import com.cart.microservice.dto.ProductDto;
import com.cart.microservice.entity.Cart;
import com.cart.microservice.entity.Product;
import com.cart.microservice.enums.CartStatus;
import com.cart.microservice.exception.CartNotFoundException;
import com.cart.microservice.exception.ProductNotFoundException;
import com.cart.microservice.repository.CartRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;

    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public long insert(CartDto cartDto) {
        return cartRepository.save(cartDto.toEntity()).getCartId();
    }

    @Override
    public CartDto find(long cartId) {
        Optional<Cart> optional = cartRepository.findById(cartId);
        if (optional.isPresent()) {
            return CartDto.toDto(optional.get());
        }
        throw new CartNotFoundException(cartId);
    }

    @Override
    public CartDto addCartProduct(long cartId, long productId) {
        CartDto cartDto = find(cartId);
        if (cartDto != null) {
            String url = "http://localhost:8080/product/get/" + productId;
            RestTemplate client = new RestTemplate();
            Product product = client.getForEntity(url, Product.class).getBody();
            if (product != null) {
                CartProductDto cartProductDto = new CartProductDto();
                cartProductDto.setProduct(ProductDto.toDto(product));
                cartProductDto.setCart(cartDto);
                cartProductDto.setSalesQuantity(50);
                cartDto.getProductList().add(cartProductDto);
                return CartDto.toDto(cartRepository.save(cartDto.toEntity()));
            } else {
                throw new ProductNotFoundException(productId);
            }
        } else {
            throw new CartNotFoundException(cartId);
        }
    }

    @Override
    public CartDto removeCartProduct(long cartId, long productId) {
        CartDto cartDto = find(cartId);
        for (CartProductDto cartProductDto : cartDto.getProductList()) {
            if (cartProductDto.getProduct().getProductId() == productId) {
                cartDto.getProductList().remove(cartProductDto);
                break;
            }
        }
        return CartDto.toDto(cartRepository.save(cartDto.toEntity()));
    }

    @Override
    public CartDto checkout(CheckoutDto checkoutDto) {
        Cart cart = new Cart();
        cart.setCartStatus(CartStatus.COMPLETED);
        cart.setCardNumber(checkoutDto.getCardNumber());
        cart.setCustomerName(checkoutDto.getCustomerName());
        Cart res = cartRepository.save(cart);
        for (CartProductDto cartProductDto : checkoutDto.getProductList()) {
            cartProductDto.setCart(CartDto.toDto(cart));
        }
        res.setProductList(CartProductDto.toEntityList(checkoutDto.getProductList()));
        return CartDto.toDto(cartRepository.save(res));
    }
}
