package com.webbandogiadung.backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import com.webbandogiadung.backend.dto.CreateOrderRequest;
import com.webbandogiadung.backend.dto.OrderItemRequest;
import com.webbandogiadung.backend.exception.ResourceNotFoundException;
import java.math.BigDecimal;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class OrderServiceTest {

    @Autowired
    private OrderService orderService;

    @Test
    void createOrderCalculatesTotal() {
        CreateOrderRequest request = new CreateOrderRequest(
                "buyer@example.com",
                "An",
                "Nguyen",
                "0900000000",
                "1 Nguyen Trai",
                null,
                "Ho Chi Minh",
                null,
                null,
                List.of(new OrderItemRequest(1L, 2)));

        var response = orderService.createOrder(request);

        assertThat(response.id()).isNotNull();
        assertThat(response.total()).isEqualByComparingTo(new BigDecimal("9600000"));
        assertThat(response.items()).hasSize(1);
    }

    @Test
    void createOrderFailsWhenProductDoesNotExist() {
        CreateOrderRequest request = new CreateOrderRequest(
                "buyer@example.com",
                "An",
                "Nguyen",
                null,
                "1 Nguyen Trai",
                null,
                "Ho Chi Minh",
                null,
                null,
                List.of(new OrderItemRequest(999L, 1)));

        assertThatThrownBy(() -> orderService.createOrder(request))
                .isInstanceOf(ResourceNotFoundException.class);
    }
}
