package com.webbandogiadung.backend.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;

public record CreateOrderRequest(
        @NotBlank @Email String email,
        @NotBlank String firstName,
        @NotBlank String lastName,
        String phone,
        @NotBlank String address,
        String apartment,
        @NotBlank String city,
        String state,
        String zip,
        @NotEmpty List<@Valid OrderItemRequest> items
) {
}
