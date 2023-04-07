package com.product.microservice.service;

import com.product.microservice.dto.ProductDto;
import com.product.microservice.entity.Product;
import com.product.microservice.exception.ProductNotFoundException;
import com.product.microservice.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<ProductDto> listByCategory(long categoryId) {
        List<ProductDto> productDtoList = new ArrayList<>();
        for (Product product : productRepository.getProductsByCategory_CategoryId(categoryId)) {
            ProductDto productDto = ProductDto.toDto(product);
            productDto.setCategoryId(categoryId);
            productDtoList.add(productDto);
        }
        return productDtoList;
    }

    @Override
    public List<ProductDto> list() {
        List<ProductDto> productDtoList = new ArrayList<>();
        for (Product product : productRepository.findAll()) {
            productDtoList.add(ProductDto.toDto(product));
        }
        return productDtoList;
    }

    @Override
    public ProductDto find(long productId) {
        Optional<Product> optional = productRepository.findById(productId);
        if (optional.isPresent()) {
            ProductDto productDto = ProductDto.toDto(optional.get());
            productDto.setCategoryId(productDto.getCategory().getCategoryId());
            return productDto;
        }
        throw new ProductNotFoundException(productId);
    }
}
