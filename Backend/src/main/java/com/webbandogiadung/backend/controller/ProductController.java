package com.webbandogiadung.backend.controller;

import com.webbandogiadung.backend.dto.ProductResponse;
import com.webbandogiadung.backend.service.ProductService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<ProductResponse> getProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String keyword) {
        return productService.searchProducts(category, keyword);
    }

    @GetMapping("/products/{id}")
    public ProductResponse getProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return productService.getCategories();
    }
}
