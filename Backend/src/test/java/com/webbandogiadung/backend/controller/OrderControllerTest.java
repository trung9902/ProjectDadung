package com.webbandogiadung.backend.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void createOrderReturnsCreatedOrder() throws Exception {
        String json = """
                {
                  "email": "buyer@example.com",
                  "firstName": "An",
                  "lastName": "Nguyen",
                  "phone": "0900000000",
                  "address": "1 Nguyen Trai",
                  "city": "Ho Chi Minh",
                  "items": [
                    { "productId": 1, "quantity": 1 }
                  ]
                }
                """;

        mockMvc.perform(post("/api/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.items[0].productId").value(1));
    }

    @Test
    void createOrderRejectsInvalidPayload() throws Exception {
        mockMvc.perform(post("/api/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"items\": []}"))
                .andExpect(status().isBadRequest());
    }
}
