package com.webbandogiadung.backend.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.LinkedHashSet;
import java.util.Set;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String name;
    private BigDecimal price;
    private BigDecimal oldPrice;
    private double rating;
    private int sold;
    private int stock;
    private String image;

    @jakarta.persistence.Column(length = 2000)
    private String description;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ProductImage> gallery = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ProductBadge> badges = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ProductSpec> specs = new LinkedHashSet<>();

    public Product(String category, String name, BigDecimal price, BigDecimal oldPrice, double rating,
                   int sold, int stock, String image, String description) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.oldPrice = oldPrice;
        this.rating = rating;
        this.sold = sold;
        this.stock = stock;
        this.image = image;
        this.description = description;
    }

    public void addImage(String url) {
        gallery.add(new ProductImage(this, url));
    }

    public void addBadge(String label, String variant) {
        badges.add(new ProductBadge(this, label, variant));
    }

    public void addSpec(String name, String value) {
        specs.add(new ProductSpec(this, name, value));
    }
}
