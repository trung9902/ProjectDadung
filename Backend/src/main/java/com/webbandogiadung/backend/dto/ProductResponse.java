package com.webbandogiadung.backend.dto;

import java.math.BigDecimal;
import java.util.List;

public record ProductResponse(
        Long id,
        String category,
        String name,
        BigDecimal price,
        BigDecimal oldPrice,
        double rating,
        int sold,
        int stock,
        String image,
        List<String> gallery,
        List<ProductBadgeResponse> badges,
        String description,
        List<ProductSpecResponse> specs
) {
}
