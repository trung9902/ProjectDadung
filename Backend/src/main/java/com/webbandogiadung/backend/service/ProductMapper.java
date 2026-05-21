package com.webbandogiadung.backend.service;

import com.webbandogiadung.backend.dto.ProductBadgeResponse;
import com.webbandogiadung.backend.dto.ProductResponse;
import com.webbandogiadung.backend.dto.ProductSpecResponse;
import com.webbandogiadung.backend.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public ProductResponse toResponse(Product product) {
        return new ProductResponse(
                product.getId(),
                product.getCategory(),
                product.getName(),
                product.getPrice(),
                product.getOldPrice(),
                product.getRating(),
                product.getSold(),
                product.getStock(),
                product.getImage(),
                product.getGallery().stream().map(image -> image.getUrl()).toList(),
                product.getBadges().stream()
                        .map(badge -> new ProductBadgeResponse(badge.getLabel(), badge.getVariant()))
                        .toList(),
                product.getDescription(),
                product.getSpecs().stream()
                        .map(spec -> new ProductSpecResponse(spec.getName(), spec.getValue()))
                        .toList()
        );
    }
}
