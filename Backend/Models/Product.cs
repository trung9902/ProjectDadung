namespace Backend.Models;

public sealed class Product
{
    public long Id { get; set; }
    public string Category { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public decimal? OldPrice { get; set; }
    public double Rating { get; set; }
    public int Sold { get; set; }
    public int Stock { get; set; }
    public string Image { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> Gallery { get; set; } = [];
    public List<ProductBadge> Badges { get; set; } = [];
    public List<ProductSpec> Specs { get; set; } = [];
    public List<CollectionProduct> CollectionProducts { get; set; } = [];
    public List<WishlistItem> WishlistItems { get; set; } = [];
}
