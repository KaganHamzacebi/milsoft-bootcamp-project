package com.product.microservice.controller;

import com.product.microservice.service.CategoryService;
import com.product.microservice.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("categoryController")
@RequestMapping("/category")
public class CategoryController extends BaseController {

    private final CategoryService categoryService;
    private final ProductService productService;

    public CategoryController(CategoryService categoryService, ProductService productService) {
        this.categoryService = categoryService;
        this.productService = productService;
    }

    @GetMapping("/list")
    ResponseEntity listCategories() {
        return responseEntity(categoryService.list());
    }

    @GetMapping("/products/{categoryId}")
    public ResponseEntity getProductsByCategoryId(@PathVariable("categoryId") long categoryId) {
        return responseEntity(productService.listByCategory(categoryId));
    }
}
