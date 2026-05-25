using Backend.Models;

namespace Backend.Repositories;

public sealed class InMemoryCouponRepository : ICouponRepository
{
    private readonly List<Coupon> _coupons = [];
    private readonly object _lock = new();
    private long _nextId = 1;

    public InMemoryCouponRepository()
    {
        Seed();
    }

    public IReadOnlyList<Coupon> GetAll()
    {
        lock (_lock)
            return [.. _coupons];
    }

    public Coupon? GetByCode(string code)
    {
        lock (_lock)
            return _coupons.Find(c => c.Code.Equals(code.Trim(), StringComparison.OrdinalIgnoreCase))
                   is { } coupon ? Clone(coupon) : null;
    }

    public Coupon Add(Coupon coupon)
    {
        lock (_lock)
        {
            coupon.Id = _nextId++;
            _coupons.Add(coupon);
            return Clone(coupon);
        }
    }

    public Coupon? IncrementUsage(long id)
    {
        lock (_lock)
        {
            var coupon = _coupons.Find(c => c.Id == id);
            if (coupon is null) return null;
            coupon.UsedCount++;
            return Clone(coupon);
        }
    }

    private void Seed()
    {
        var now = DateTime.UtcNow;
        _coupons.AddRange([
            new Coupon
            {
                Id = _nextId++,
                Code = "GIAM10",
                DiscountType = DiscountType.Percentage,
                DiscountValue = 10,
                MinOrderValue = 500_000,
                MaxUses = 100,
                IsActive = true,
                ExpiresAt = now.AddMonths(3),
                CreatedAt = now
            },
            new Coupon
            {
                Id = _nextId++,
                Code = "GIAM50K",
                DiscountType = DiscountType.FixedAmount,
                DiscountValue = 50_000,
                MinOrderValue = 300_000,
                MaxUses = null,
                IsActive = true,
                ExpiresAt = now.AddMonths(6),
                CreatedAt = now
            },
            new Coupon
            {
                Id = _nextId++,
                Code = "WELCOME20",
                DiscountType = DiscountType.Percentage,
                DiscountValue = 20,
                MinOrderValue = 1_000_000,
                MaxUses = 50,
                IsActive = true,
                ExpiresAt = now.AddMonths(1),
                CreatedAt = now
            }
        ]);
    }

    private static Coupon Clone(Coupon c) => new()
    {
        Id = c.Id,
        Code = c.Code,
        DiscountType = c.DiscountType,
        DiscountValue = c.DiscountValue,
        MinOrderValue = c.MinOrderValue,
        MaxUses = c.MaxUses,
        UsedCount = c.UsedCount,
        IsActive = c.IsActive,
        ExpiresAt = c.ExpiresAt,
        CreatedAt = c.CreatedAt
    };
}
