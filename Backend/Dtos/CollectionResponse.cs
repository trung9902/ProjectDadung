namespace Backend.Dtos;

public sealed record CollectionResponse(
    long Id,
    string Name,
    string Slug,
    string? Description,
    string? CoverImage,
    bool IsPublished,
    int DisplayOrder,
    DateTime CreatedAt,
    DateTime UpdatedAt
);