package com.webbandogiadung.backend.repository;

import com.webbandogiadung.backend.entity.Product;
import java.util.List;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @EntityGraph(attributePaths = {"gallery", "badges", "specs"})
    @Query("""
            select distinct p from Product p
            where (:category is null or lower(p.category) = lower(:category))
              and (:keyword is null or lower(p.name) like lower(concat('%', :keyword, '%')))
            order by p.id
            """)
    List<Product> search(@Param("category") String category, @Param("keyword") String keyword);

    @EntityGraph(attributePaths = {"gallery", "badges", "specs"})
    @Query("select p from Product p where p.id = :id")
    java.util.Optional<Product> findDetailedById(@Param("id") Long id);

    @Query("select distinct p.category from Product p order by p.category")
    List<String> findDistinctCategories();
}
