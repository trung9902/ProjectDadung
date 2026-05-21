package com.webbandogiadung.backend.service;

import com.webbandogiadung.backend.dto.CreateOrderRequest;
import com.webbandogiadung.backend.dto.OrderItemRequest;
import com.webbandogiadung.backend.dto.OrderResponse;
import com.webbandogiadung.backend.entity.CustomerOrder;
import com.webbandogiadung.backend.entity.OrderItem;
import com.webbandogiadung.backend.entity.Product;
import com.webbandogiadung.backend.exception.BadRequestException;
import com.webbandogiadung.backend.exception.ResourceNotFoundException;
import com.webbandogiadung.backend.repository.OrderRepository;
import com.webbandogiadung.backend.repository.ProductRepository;
import java.math.BigDecimal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final OrderMapper orderMapper;

    public OrderService(OrderRepository orderRepository, ProductRepository productRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.orderMapper = orderMapper;
    }

    @Transactional
    public OrderResponse createOrder(CreateOrderRequest request) {
        CustomerOrder order = new CustomerOrder();
        order.setEmail(request.email());
        order.setFirstName(request.firstName());
        order.setLastName(request.lastName());
        order.setPhone(request.phone());
        order.setAddress(request.address());
        order.setApartment(request.apartment());
        order.setCity(request.city());
        order.setState(request.state());
        order.setZip(request.zip());

        BigDecimal subtotal = BigDecimal.ZERO;
        for (OrderItemRequest itemRequest : request.items()) {
            Product product = productRepository.findById(itemRequest.productId())
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Khong tim thay san pham id=" + itemRequest.productId()));

            if (itemRequest.quantity() > product.getStock()) {
                throw new BadRequestException("San pham " + product.getName() + " chi con " + product.getStock());
            }

            OrderItem item = new OrderItem(product.getId(), product.getName(), product.getPrice(), itemRequest.quantity());
            order.addItem(item);
            subtotal = subtotal.add(item.getLineTotal());
        }

        order.setSubtotal(subtotal);
        order.setShippingFee(BigDecimal.ZERO);
        order.setTotal(subtotal.add(order.getShippingFee()));

        return orderMapper.toResponse(orderRepository.save(order));
    }

    @Transactional(readOnly = true)
    public OrderResponse getOrder(Long id) {
        return orderRepository.findWithItemsById(id)
                .map(orderMapper::toResponse)
                .orElseThrow(() -> new ResourceNotFoundException("Khong tim thay don hang id=" + id));
    }
}
