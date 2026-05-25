using Backend.Dtos;
using Backend.Exceptions;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Services;

public sealed class CouponService(ICouponRepository couponRepository)
{
    public CouponValidationResponse ValidateCoupon(string code, decimal subtotal)
    {
        var coupon = couponRepository.GetByCode(code)
            ?? throw new BadRequestException("Mã giảm giá không tồn tại.");

        if (!coupon.IsActive)
            throw new BadRequestException("Mã giảm giá đã bị vô hiệu hóa.");

        if (coupon.ExpiresAt.HasValue && coupon.ExpiresAt.Value < DateTime.UtcNow)
            throw new BadRequestException("Mã giảm giá đã hết hạn.");

        if (coupon.MaxUses.HasValue && coupon.UsedCount >= coupon.MaxUses.Value)
            throw new BadRequestException("Mã giảm giá đã đạt giới hạn sử dụng.");

        if (coupon.MinOrderValue.HasValue && subtotal < coupon.MinOrderValue.Value)
            throw new BadRequestException($"Đơn hàng tối thiểu {coupon.MinOrderValue.Value:N0}đ để dùng mã này.");

        var discountAmount = CalculateDiscount(coupon, subtotal);
        var finalTotal = subtotal - discountAmount;

        return new CouponValidationResponse(
            coupon.Code,
            coupon.DiscountType,
            coupon.DiscountValue,
            discountAmount,
            finalTotal,
            "Áp dụng mã giảm giá thành công!");
    }

    public decimal CalculateDiscount(Coupon coupon, decimal subtotal) =>
        coupon.DiscountType == DiscountType.Percentage
            ? Math.Round(subtotal * coupon.DiscountValue / 100, 0)
            : Math.Min(coupon.DiscountValue, subtotal);

    public void IncrementUsage(string code)
    {
        var coupon = couponRepository.GetByCode(code);
        if (coupon is not null)
            couponRepository.IncrementUsage(coupon.Id);
    }

    public Coupon? GetCoupon(string code) => couponRepository.GetByCode(code);
}
