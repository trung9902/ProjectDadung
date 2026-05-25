using Backend.Models;

namespace Backend.Repositories;

public sealed class InMemoryOrderRepository : IOrderRepository
{
    private readonly object _lock = new();
    private readonly List<CustomerOrder> _orders = [];
    private long _nextId = 1;

    public IReadOnlyList<CustomerOrder> GetAll()
    {
        lock (_lock)
        {
            return _orders.OrderByDescending(order => order.CreatedAt).Select(Clone).ToList();
        }
    }

    public CustomerOrder? GetById(long id)
    {
        lock (_lock)
        {
            var order = _orders.FirstOrDefault(item => item.Id == id);
            return order is null ? null : Clone(order);
        }
    }

    public CustomerOrder Add(CustomerOrder order)
    {
        lock (_lock)
        {
            order.Id = _nextId++;
            _orders.Add(Clone(order));
            return Clone(order);
        }
    }

    public CustomerOrder? UpdateStatus(long id, OrderStatus status)
    {
        lock (_lock)
        {
            var order = _orders.FirstOrDefault(item => item.Id == id);
            if (order is null)
            {
                return null;
            }

            order.Status = status;
            return Clone(order);
        }
    }

    private static CustomerOrder Clone(CustomerOrder order) => new()
    {
        Id = order.Id,
        Email = order.Email,
        FirstName = order.FirstName,
        LastName = order.LastName,
        Phone = order.Phone,
        Address = order.Address,
        Apartment = order.Apartment,
        City = order.City,
        State = order.State,
        Zip = order.Zip,
        Subtotal = order.Subtotal,
        ShippingFee = order.ShippingFee,
        DiscountAmount = order.DiscountAmount,
        CouponCode = order.CouponCode,
        Total = order.Total,
        CreatedAt = order.CreatedAt,
        CancelledAt = order.CancelledAt,
        CancelReason = order.CancelReason,
        Status = order.Status,
        PaymentMethod = order.PaymentMethod,
        PaymentStatus = order.PaymentStatus,
        PaymentTransactionId = order.PaymentTransactionId,
        PaidAt = order.PaidAt,
        Items = order.Items.Select(item => new OrderItem
        {
            ProductId = item.ProductId,
            ProductName = item.ProductName,
            UnitPrice = item.UnitPrice,
            Quantity = item.Quantity
        }).ToList()
    };
}
