package com.product.microservice.controller;

import com.product.microservice.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("productController")
@RequestMapping("/product")
public class ProductController extends BaseController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/list")
    public ResponseEntity listProducts() {
        return responseEntity(productService.list());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getProductById(@PathVariable("id") long productId) {
        return responseEntity(productService.find(productId));
    }
}
