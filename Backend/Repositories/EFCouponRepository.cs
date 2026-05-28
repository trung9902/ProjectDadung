using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories;

public sealed class EFCouponRepository(AppDbContext db) : ICouponRepository
{
    public IReadOnlyList<Coupon> GetAll() =>
        db.Coupons
            .AsNoTracking()
            .OrderBy(coupon => coupon.Id)
            .ToList();

    public Coupon? GetByCode(string code)
    {
        var normalizedCode = code.Trim().ToUpper();
        return db.Coupons
            .AsNoTracking()
            .FirstOrDefault(coupon => coupon.Code.ToUpper() == normalizedCode);
    }

    public Coupon Add(Coupon coupon)
    {
        db.Coupons.Add(coupon);
        db.SaveChanges();
        return coupon;
    }

    public Coupon? IncrementUsage(long id)
    {
        var coupon = db.Coupons.Find(id);
        if (coupon is null)
        {
            return null;
        }

        coupon.UsedCount++;
        db.SaveChanges();
        return coupon;
    }
}
