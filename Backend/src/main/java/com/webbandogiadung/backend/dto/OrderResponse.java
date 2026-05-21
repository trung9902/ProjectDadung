package com.webbandogiadung.backend.dto;

import com.webbandogiadung.backend.entity.OrderStatus;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public record OrderResponse(
        Long id,
        String email,
        String customerName,
        String address,
        String city,
        BigDecimal subtotal,
        BigDecimal shippingFee,
        BigDecimal total,
        OrderStatus status,
        LocalDateTime createdAt,
        List<OrderItemResponse> items
) {
}
