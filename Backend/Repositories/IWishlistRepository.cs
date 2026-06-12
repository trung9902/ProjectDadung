using Backend.Models;

namespace Backend.Repositories;

public interface IWishlistRepository
{
    IReadOnlyList<WishlistItem> GetByUserId(long userId);
    WishlistItem? Get(long userId, long productId);
    bool ProductExists(long productId);
    WishlistItem Add(WishlistItem item);
    bool Delete(long userId, long productId);
    void DeleteAll(long userId);
    bool Exists(long userId, long productId);
}
