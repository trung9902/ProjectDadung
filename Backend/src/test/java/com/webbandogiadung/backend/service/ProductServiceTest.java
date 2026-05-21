package com.webbandogiadung.backend.service;

import static org.assertj.core.api.Assertions.assertThat;

import com.webbandogiadung.backend.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @Test
    void searchProductsReturnsSeedData() {
        assertThat(productRepository.count()).isGreaterThanOrEqualTo(9);
        assertThat(productService.searchProducts(null, null)).hasSizeGreaterThanOrEqualTo(9);
    }

    @Test
    void searchProductsCanFilterByKeyword() {
        assertThat(productService.searchProducts(null, "ca phe"))
                .extracting("name")
                .anyMatch(name -> name.toString().toLowerCase().contains("ca phe"));
    }
}
