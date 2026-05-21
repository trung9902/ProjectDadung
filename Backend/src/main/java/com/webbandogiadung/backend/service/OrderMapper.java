package com.webbandogiadung.backend.service;

import com.webbandogiadung.backend.dto.OrderItemResponse;
import com.webbandogiadung.backend.dto.OrderResponse;
import com.webbandogiadung.backend.entity.CustomerOrder;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    public OrderResponse toResponse(CustomerOrder order) {
        return new OrderResponse(
                order.getId(),
                order.getEmail(),
                order.getFirstName() + " " + order.getLastName(),
                order.getAddress(),
                order.getCity(),
                order.getSubtotal(),
                order.getShippingFee(),
                order.getTotal(),
                order.getStatus(),
                order.getCreatedAt(),
                order.getItems().stream()
                        .map(item -> new OrderItemResponse(
                                item.getProductId(),
                                item.getProductName(),
                                item.getUnitPrice(),
                                item.getQuantity(),
                                item.getLineTotal()))
                        .toList()
        );
    }
}
