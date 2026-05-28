using System.ComponentModel.DataAnnotations;
using Backend.Enums;

namespace Backend.Dtos;

public sealed record ValidateCouponRequest(
    [Required] string Code,
    [Required] decimal Subtotal);

public sealed record CouponValidationResponse(
    string Code,
    DiscountType DiscountType,
    decimal DiscountValue,
    decimal DiscountAmount,
    decimal FinalTotal,
    string Message);

public sealed record ApplyCouponRequest([Required] string Code);
