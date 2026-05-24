using Backend.Dtos;
using Backend.Exceptions;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Services;

public sealed class OrderService(IOrderRepository orderRepository, IProductRepository productRepository)
{
    public IReadOnlyList<OrderResponse> GetOrders() =>
        orderRepository.GetAll().Select(ToResponse).ToList();

    public OrderResponse GetOrder(long id)
    {
        var order = orderRepository.GetById(id)
            ?? throw new ResourceNotFoundException($"Khong tim thay don hang id={id}");

        return ToResponse(order);
    }

    public OrderResponse CreateOrder(CreateOrderRequest request)
    {
        var order = new CustomerOrder
        {
            Email = request.Email.Trim(),
            FirstName = request.FirstName.Trim(),
            LastName = request.LastName.Trim(),
            Phone = request.Phone?.Trim(),
            Address = request.Address.Trim(),
            Apartment = request.Apartment?.Trim(),
            City = request.City.Trim(),
            State = request.State?.Trim(),
            Zip = request.Zip?.Trim(),
            PaymentMethod = request.PaymentMethod ?? PaymentMethod.Cod,
            CreatedAt = DateTime.UtcNow
        };

        foreach (var itemRequest in request.Items)
        {
            var product = productRepository.GetById(itemRequest.ProductId)
                ?? throw new ResourceNotFoundException($"Khong tim thay san pham id={itemRequest.ProductId}");

            if (itemRequest.Quantity > product.Stock)
            {
                throw new BadRequestException($"San pham {product.Name} chi con {product.Stock}");
            }

            order.Items.Add(new OrderItem
            {
                ProductId = product.Id,
                ProductName = product.Name,
                UnitPrice = product.Price,
                Quantity = itemRequest.Quantity
            });
        }

        order.Subtotal = order.Items.Sum(item => item.LineTotal);
        order.ShippingFee = 0;
        order.Total = order.Subtotal + order.ShippingFee;
        order.PaymentStatus = order.PaymentMethod == PaymentMethod.Cod ? PaymentStatus.Unpaid : PaymentStatus.Paid;
        order.PaidAt = order.PaymentStatus == PaymentStatus.Paid ? DateTime.UtcNow : null;

        return ToResponse(orderRepository.Add(order));
    }

    public OrderResponse UpdateStatus(long id, OrderStatus status)
    {
        var order = orderRepository.UpdateStatus(id, status)
            ?? throw new ResourceNotFoundException($"Khong tim thay don hang id={id}");

        return ToResponse(order);
    }

    private static OrderResponse ToResponse(CustomerOrder order) => new(
        order.Id,
        order.Email,
        $"{order.FirstName} {order.LastName}",
        order.Address,
        order.City,
        order.Subtotal,
        order.ShippingFee,
        order.Total,
        order.Status,
        order.PaymentMethod,
        order.PaymentStatus,
        order.PaymentTransactionId,
        order.CreatedAt,
        order.PaidAt,
        order.CancelledAt,
        order.CancelReason,
        order.Items.Select(item => new OrderItemResponse(
            item.ProductId,
            item.ProductName,
            item.UnitPrice,
            item.Quantity,
            item.LineTotal)).ToList());
}
