using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories;

public sealed class EFWishlistRepository(AppDbContext db) : IWishlistRepository
{
    public IReadOnlyList<WishlistItem> GetByUserId(long userId) =>
        WishlistWithProducts()
            .Where(item => item.UserId == userId)
            .OrderByDescending(item => item.CreatedAt)
            .ToList();

    public WishlistItem? Get(long userId, long productId) =>
        WishlistWithProducts()
            .FirstOrDefault(item => item.UserId == userId && item.ProductId == productId);

    public bool ProductExists(long productId) =>
        db.Products.Any(product => product.Id == productId);

    public WishlistItem Add(WishlistItem item)
    {
        db.WishlistItems.Add(item);
        db.SaveChanges();
        return Get(item.UserId, item.ProductId) ?? item;
    }

    public bool Delete(long userId, long productId)
    {
        var item = db.WishlistItems.Find(userId, productId);
        if (item is null)
        {
            return false;
        }

        db.WishlistItems.Remove(item);
        db.SaveChanges();
        return true;
    }

    public void DeleteAll(long userId)
    {
        db.WishlistItems
            .Where(item => item.UserId == userId)
            .ExecuteDelete();
    }

    public bool Exists(long userId, long productId) =>
        db.WishlistItems.Any(item => item.UserId == userId && item.ProductId == productId);

    private IQueryable<WishlistItem> WishlistWithProducts() =>
        db.WishlistItems
            .AsNoTracking()
            .Include(item => item.Product)
                .ThenInclude(product => product.Badges)
            .Include(item => item.Product)
                .ThenInclude(product => product.Specs);
}
