# Backend Spring Boot - Web Ban Do Gia Dung

Backend nay dung Spring Boot + H2 de ban vua chay duoc API, vua hoc tung lop trong du an.

## 1. Yeu cau may

Can cai JDK 17 hoac 21. Hien may cua ban chua nhan lenh `java`, nen hay cai mot trong cac ban sau:

- Eclipse Temurin JDK 17: https://adoptium.net/temurin/releases/?version=17
- Oracle JDK 21: https://www.oracle.com/java/technologies/downloads/

Sau khi cai xong, mo terminal moi va kiem tra:

```powershell
java -version
```

Ban khong bat buoc cai Maven. Thu muc nay co `mvnw.cmd` de tai Maven ve local khi chay lan dau.

## 2. Chay backend

Tu thu muc `ProjectDaDung/backend`:

```powershell
.\mvnw.cmd spring-boot:run
```

API se chay tai:

```text
http://localhost:8080
```

H2 Console:

```text
http://localhost:8080/h2-console
```

Thong tin dang nhap H2:

```text
JDBC URL: jdbc:h2:mem:giadungdb
User: sa
Password: de trong
```

## 3. API san pham

Lay tat ca san pham:

```powershell
curl http://localhost:8080/api/products
```

Tim san pham theo tu khoa:

```powershell
curl "http://localhost:8080/api/products?keyword=ca%20phe"
```

Loc theo danh muc:

```powershell
curl "http://localhost:8080/api/products?category=Phong%20khach"
```

Lay chi tiet san pham:

```powershell
curl http://localhost:8080/api/products/1
```

Lay danh muc:

```powershell
curl http://localhost:8080/api/categories
```

## 4. API don hang

Tao don hang:

```powershell
curl -X POST http://localhost:8080/api/orders `
  -H "Content-Type: application/json" `
  -d '{
    "email": "buyer@example.com",
    "firstName": "An",
    "lastName": "Nguyen",
    "phone": "0900000000",
    "address": "1 Nguyen Trai",
    "city": "Ho Chi Minh",
    "items": [
      { "productId": 1, "quantity": 2 },
      { "productId": 2, "quantity": 1 }
    ]
  }'
```

Xem lai don hang:

```powershell
curl http://localhost:8080/api/orders/1
```

## 5. Chay test

```powershell
.\mvnw.cmd test
```

## 6. Lo trinh hoc trong source code

1. `entity`: hoc cach Java class map thanh bang database.
2. `repository`: hoc cach Spring Data JPA tao truy van.
3. `service`: hoc cach xu ly nghiep vu, tinh tien don hang, kiem tra ton kho.
4. `dto`: hoc cach tach du lieu API khoi entity database.
5. `controller`: hoc cach tao REST API.
6. `config/SeedDataConfig.java`: hoc cach nap du lieu mau khi app khoi dong.
7. `exception`: hoc cach tra loi loi API cho frontend.

## 7. Ket noi frontend sau nay

Frontend Vite mac dinh chay o `http://localhost:5173`, backend da mo CORS cho dia chi nay.

Buoc tiep theo nen lam:

- Thay `src/data/products.js` bang fetch `GET /api/products`.
- Trang chi tiet san pham goi `GET /api/products/{id}`.
- Trang checkout gui `POST /api/orders`.
