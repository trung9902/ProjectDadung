using System.ComponentModel.DataAnnotations;
using Backend.Models;

namespace Backend.Dtos;

public sealed record CreateOrderRequest(
    [Required, EmailAddress] string Email,
    [Required] string FirstName,
    [Required] string LastName,
    string? Phone,
    [Required] string Address,
    string? Apartment,
    [Required] string City,
    string? State,
    string? Zip,
    PaymentMethod? PaymentMethod,
    [Required, MinLength(1)] IReadOnlyList<OrderItemRequest> Items);

public sealed record OrderItemRequest(
    [Range(1, long.MaxValue)] long ProductId,
    [Range(1, int.MaxValue)] int Quantity);

public sealed record OrderResponse(
    long Id,
    string Email,
    string CustomerName,
    string Address,
    string City,
    decimal Subtotal,
    decimal ShippingFee,
    decimal Total,
    OrderStatus Status,
    PaymentMethod PaymentMethod,
    PaymentStatus PaymentStatus,
    string? PaymentTransactionId,
    DateTime CreatedAt,
    DateTime? PaidAt,
    DateTime? CancelledAt,
    string? CancelReason,
    IReadOnlyList<OrderItemResponse> Items);

public sealed record OrderItemResponse(
    long ProductId,
    string ProductName,
    decimal UnitPrice,
    int Quantity,
    decimal LineTotal);

public sealed record UpdateOrderStatusRequest([Required] OrderStatus Status);
