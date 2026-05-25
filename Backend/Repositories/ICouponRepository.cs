using Backend.Models;

namespace Backend.Repositories;

public interface ICouponRepository
{
    IReadOnlyList<Coupon> GetAll();
    Coupon? GetByCode(string code);
    Coupon Add(Coupon coupon);
    Coupon? IncrementUsage(long id);
}
