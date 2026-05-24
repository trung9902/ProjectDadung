using System.ComponentModel.DataAnnotations;
using Backend.Models;

namespace Backend.Dtos;

public sealed record ProductResponse(
    long Id,
    string Category,
    string Name,
    decimal Price,
    decimal? OldPrice,
    double Rating,
    int Sold,
    int Stock,
    string Image,
    IReadOnlyList<string> Gallery,
    IReadOnlyList<ProductBadge> Badges,
    string Description,
    IReadOnlyList<ProductSpec> Specs);

public sealed record ProductRequest(
    [Required] string Category,
    [Required] string Name,
    [Range(0, double.MaxValue)] decimal Price,
    [Range(0, double.MaxValue)] decimal? OldPrice,
    [Range(0, 5)] double Rating,
    [Range(0, int.MaxValue)] int Sold,
    [Range(0, int.MaxValue)] int Stock,
    [Required] string Image,
    [Required] string Description,
    IReadOnlyList<string>? Gallery,
    IReadOnlyList<ProductBadge>? Badges,
    IReadOnlyList<ProductSpec>? Specs);
