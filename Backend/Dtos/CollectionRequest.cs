namespace Backend.Dtos;

public sealed record CollectionRequest(
    string Name,
    string Slug,
    string? Description,
    string? CoverImage,
    bool IsPublished,
    int DisplayOrder
);