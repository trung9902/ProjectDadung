package com.webbandogiadung.backend.config;

import com.webbandogiadung.backend.entity.Product;
import com.webbandogiadung.backend.repository.ProductRepository;
import java.math.BigDecimal;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SeedDataConfig {

    @Bean
    CommandLineRunner seedProducts(ProductRepository productRepository) {
        return args -> {
            if (productRepository.count() > 0) {
                return;
            }

            Product coffeeMachine = product(
                    "Do dung nha bep",
                    "May pha ca phe cao cap",
                    "4800000",
                    "5200000",
                    4.8,
                    120,
                    18,
                    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
                    "May pha ca phe cao cap voi thiet ke nho gon, chiet xuat on dinh va thao tac don gian.");
            coffeeMachine.addBadge("GIAM 10%", "discount");
            coffeeMachine.addSpec("Cong suat", "1450W");
            coffeeMachine.addSpec("Dung tich binh nuoc", "1.8 lit");
            coffeeMachine.addSpec("Ap suat bom", "15 bar");
            addGallery(coffeeMachine,
                    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80");

            Product lamp = product(
                    "Phong khach",
                    "Den trang tri hien dai",
                    "2300000",
                    null,
                    4.5,
                    80,
                    25,
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
                    "Den trang tri kieu dang toi gian, anh sang am va de phoi voi nhieu phong cach noi that.");
            lamp.addBadge("MOI", "new");
            lamp.addSpec("Chat lieu", "Kim loai son tinh dien");
            lamp.addSpec("Mau anh sang", "Vang am");
            addGallery(lamp,
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80");

            Product towelRack = product(
                    "Phong tam",
                    "Ke treo khan inox",
                    "890000",
                    null,
                    4.2,
                    55,
                    40,
                    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
                    "Ke treo khan inox chong gi, chac chan, tiet kiem dien tich.");
            towelRack.addSpec("Chat lieu", "Inox 304");
            towelRack.addSpec("Tai trong", "Toi da 12 kg");
            addGallery(towelRack,
                    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80");

            Product cookware = product(
                    "Do dung nha bep",
                    "Bo noi chong dinh",
                    "3200000",
                    "3900000",
                    4.7,
                    200,
                    12,
                    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
                    "Bo noi chong dinh phu lop ben bi, truyen nhiet deu va de ve sinh.");
            cookware.addBadge("HOT", "hot");
            cookware.addSpec("So mon", "5 mon");
            cookware.addSpec("Loai bep", "Gas, hong ngoai, tu");
            addGallery(cookware,
                    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80");

            Product sofa = product(
                    "Phong khach",
                    "Ghe sofa mini",
                    "9500000",
                    null,
                    5.0,
                    40,
                    7,
                    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
                    "Ghe sofa mini em ai, kich thuoc vua phai cho can ho nho.");
            sofa.addBadge("BEST SELLER", "best");
            sofa.addSpec("Chat lieu boc", "Vai cao cap");
            sofa.addSpec("So cho ngoi", "2 cho");
            addGallery(sofa,
                    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80");

            Product mirror = product(
                    "Phong tam",
                    "Guong LED thong minh",
                    "4100000",
                    "4600000",
                    4.6,
                    90,
                    15,
                    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
                    "Guong LED thong minh co cam ung cham, anh sang diu mat va chong mo.");
            mirror.addBadge("GIAM 15%", "discount");
            mirror.addSpec("Kich thuoc", "70 x 90 cm");
            mirror.addSpec("Chuan chong nuoc", "IP44");
            addGallery(mirror,
                    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80");

            Product speaker = product(
                    "Thiet bi thong minh",
                    "Loa khong day Studio",
                    "6990000",
                    "8200000",
                    4.9,
                    150,
                    10,
                    "https://images.unsplash.com/photo-1518449078785-1e1a1b8c8c9c?auto=format&fit=crop&w=1200&q=80",
                    "Loa khong day voi am thanh chat luong cao va ket noi Bluetooth tien loi.");
            speaker.addBadge("GIAM 15%", "discount");
            speaker.addSpec("Cong suat", "50W");
            speaker.addSpec("Ket noi", "Bluetooth 5.0, AUX");
            addGallery(speaker,
                    "https://images.unsplash.com/photo-1518449078785-1e1a1b8c8c9c?auto=format&fit=crop&w=1200&q=80");

            Product washer = product(
                    "May giat & say",
                    "May giat thong minh",
                    "12500000",
                    null,
                    4.7,
                    70,
                    5,
                    "https://images.unsplash.com/photo-1581579181916-9c8a1b8c8c9c?auto=format&fit=crop&w=1200&q=80",
                    "May giat thong minh voi cong nghe AI, tiet kiem nuoc va dien nang.");
            washer.addBadge("MOI", "new");
            washer.addSpec("Dung tich", "10 kg");
            washer.addSpec("Ket noi", "Wi-Fi, dieu khien qua app");
            addGallery(washer,
                    "https://images.unsplash.com/photo-1581579181916-9c8a1b8c8c9c?auto=format&fit=crop&w=1200&q=80");

            Product homeAppliance = product(
                    "Do gia dung",
                    "May pha ca phe mini",
                    "4800000",
                    null,
                    4.8,
                    120,
                    18,
                    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
                    "May pha ca phe mini phu hop cho gia dinh, van phong nho hoac goc bep hien dai.");
            homeAppliance.addSpec("Bao hanh", "24 thang");
            addGallery(homeAppliance,
                    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80");

            productRepository.save(coffeeMachine);
            productRepository.save(lamp);
            productRepository.save(towelRack);
            productRepository.save(cookware);
            productRepository.save(sofa);
            productRepository.save(mirror);
            productRepository.save(speaker);
            productRepository.save(washer);
            productRepository.save(homeAppliance);
        };
    }

    private Product product(String category, String name, String price, String oldPrice, double rating,
                            int sold, int stock, String image, String description) {
        return new Product(
                category,
                name,
                new BigDecimal(price),
                oldPrice == null ? null : new BigDecimal(oldPrice),
                rating,
                sold,
                stock,
                image,
                description);
    }

    private void addGallery(Product product, String... urls) {
        for (String url : urls) {
            product.addImage(url);
        }
    }
}
