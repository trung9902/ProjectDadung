package com.webbandogiadung.backend.service;

import com.webbandogiadung.backend.dto.ProductResponse;
import com.webbandogiadung.backend.exception.ResourceNotFoundException;
import com.webbandogiadung.backend.repository.ProductRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public ProductService(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    public List<ProductResponse> searchProducts(String category, String keyword) {
        return productRepository.search(blankToNull(category), blankToNull(keyword)).stream()
                .map(productMapper::toResponse)
                .toList();
    }

    public ProductResponse getProduct(Long id) {
        return productRepository.findDetailedById(id)
                .map(productMapper::toResponse)
                .orElseThrow(() -> new ResourceNotFoundException("Khong tim thay san pham id=" + id));
    }

    public List<String> getCategories() {
        return productRepository.findDistinctCategories();
    }

    private String blankToNull(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }
}
