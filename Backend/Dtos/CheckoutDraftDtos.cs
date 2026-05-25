using System.ComponentModel.DataAnnotations;
using Backend.Models;

namespace Backend.Dtos;

public sealed record SaveCheckoutDraftRequest(
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

public sealed record CheckoutDraftResponse(
    long Id,
    string Email,
    string CustomerName,
    string Address,
    string City,
    decimal Subtotal,
    decimal ShippingFee,
    decimal DiscountAmount,
    string? CouponCode,
    decimal Total,
    PaymentMethod? PaymentMethod,
    PaymentStatus PaymentStatus,
    DateTime CreatedAt,
    DateTime UpdatedAt,
    IReadOnlyList<OrderItemResponse> Items);

public sealed record CancelCheckoutDraftRequest(string? Reason);

public sealed record UpdateCheckoutPaymentRequest([Required] PaymentMethod PaymentMethod);
