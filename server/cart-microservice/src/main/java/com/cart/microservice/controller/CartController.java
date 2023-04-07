package com.cart.microservice.controller;

import com.cart.microservice.dto.CartDto;
import com.cart.microservice.dto.CheckoutDto;
import com.cart.microservice.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController("cartController")
@RequestMapping("/cart")
public class CartController extends BaseController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/create")
    public ResponseEntity createCard(@RequestBody CartDto cartDto) {
        return responseEntity(cartService.insert(cartDto));
    }

    @GetMapping("/get/{cartId}")
    public ResponseEntity getCartById(@PathVariable("cartId") long cartId) {
        return responseEntity(cartService.find(cartId));
    }

    @GetMapping("/add/{cartId}/{productId}")
    public ResponseEntity addCartProduct(@PathVariable("cartId") long cartId, @PathVariable("productId") long productId) {
        return responseEntity(cartService.addCartProduct(cartId, productId));
    }

    @GetMapping("/remove/{cartId}/{productId}")
    public ResponseEntity removeCartProduct(@PathVariable("cartId") long cartId, @PathVariable("productId") long productId) {
        return responseEntity(cartService.removeCartProduct(cartId, productId));
    }

    @PostMapping("/checkout")
    public ResponseEntity checkout(@RequestBody CheckoutDto checkoutDto) {
        return responseEntity(cartService.checkout(checkoutDto));
    }
}
