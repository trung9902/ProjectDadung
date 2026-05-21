package com.webbandogiadung.backend.repository;

import com.webbandogiadung.backend.entity.CustomerOrder;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderRepository extends JpaRepository<CustomerOrder, Long> {

    @EntityGraph(attributePaths = "items")
    @Query("select o from CustomerOrder o where o.id = :id")
    java.util.Optional<CustomerOrder> findWithItemsById(@Param("id") Long id);
}
