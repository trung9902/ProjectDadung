# Backend ASP.NET Core MVC - Web Ban Do Gia Dung

Backend nay da duoc chuyen sang ASP.NET Core Web API theo mo hinh MVC:

- `Controllers`: nhan request HTTP.
- `Dtos`: request/response model cho API.
- `Models`: entity/domain model.
- `Repositories`: luu du lieu in-memory va seed san pham mau.
- `Services`: xu ly nghiep vu.
- `Middleware`: tra loi loi JSON thong nhat.

## Yeu cau

Can cai .NET SDK 9.

```powershell
dotnet --info
```

## Chay backend

Tu thu muc `Backend`:

```powershell
dotnet run
```

API chay tai:

```text
http://localhost:8080
```

Swagger UI:

```text
http://localhost:8080/swagger
```

## API co san

San pham:

```text
GET    /api/products
GET    /api/products?keyword=ca%20phe
GET    /api/products?category=Phong%20khach
GET    /api/products/{id}
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
GET    /api/categories
```

Don hang:

```text
GET   /api/orders
POST  /api/orders
GET   /api/orders/{id}
PATCH /api/orders/{id}/status
```

Checkout draft:

```text
GET  /api/checkout-drafts
POST /api/checkout-drafts
GET  /api/checkout-drafts/{id}
PUT  /api/checkout-drafts/{id}
PATCH /api/checkout-drafts/{id}/payment-method
POST /api/checkout-drafts/{id}/complete
POST /api/checkout-drafts/{id}/cancel
```

Gia tri `paymentMethod` hop le:

```text
Cod
VnPay
ShopeePay
```

Gia tri `paymentStatus` backend tra ve:

```text
Unpaid
Pending
Paid
Failed
Refunded
Cancelled
```

He thong:

```text
GET /api/health
```

## Tao don hang mau

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

## Build

```powershell
dotnet build
```
