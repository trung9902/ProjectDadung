namespace Backend.Dtos;

public sealed record WishlistItemResponse(
    DateTime CreatedAt,
    ProductResponse Product);

public sealed record WishlistStatusResponse(
    long ProductId,
    bool IsFavorite);
