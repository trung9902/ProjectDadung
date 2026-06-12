using Backend.Dtos;
using Backend.Exceptions;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Services;

public sealed class WishlistService(IWishlistRepository wishlistRepository)
{
    public IReadOnlyList<WishlistItemResponse> GetWishlist(long userId) =>
        wishlistRepository.GetByUserId(userId).Select(ToResponse).ToList();

    public WishlistItemResponse AddToWishlist(long userId, long productId)
    {
        EnsureProductExists(productId);

        var existing = wishlistRepository.Get(userId, productId);
        if (existing is not null)
        {
            return ToResponse(existing);
        }

        return ToResponse(wishlistRepository.Add(new WishlistItem
        {
            UserId = userId,
            ProductId = productId,
            CreatedAt = DateTime.UtcNow
        }));
    }

    public void RemoveFromWishlist(long userId, long productId)
    {
        EnsureProductExists(productId);
        wishlistRepository.Delete(userId, productId);
    }

    public void ClearWishlist(long userId)
    {
        wishlistRepository.DeleteAll(userId);
    }

    public WishlistStatusResponse GetStatus(long userId, long productId)
    {
        EnsureProductExists(productId);
        return new(productId, wishlistRepository.Exists(userId, productId));
    }

    private void EnsureProductExists(long productId)
    {
        if (!wishlistRepository.ProductExists(productId))
        {
            throw new ResourceNotFoundException($"Khong tim thay san pham id={productId}");
        }
    }

    private static WishlistItemResponse ToResponse(WishlistItem item) =>
        new(item.CreatedAt, ToProductResponse(item.Product));

    private static ProductResponse ToProductResponse(Product product) => new(
        product.Id,
        product.Category,
        product.Name,
        product.Price,
        product.OldPrice,
        product.Rating,
        product.Sold,
        product.Stock,
        product.Image,
        product.Gallery,
        product.Badges,
        product.Description,
        product.Specs);
}
