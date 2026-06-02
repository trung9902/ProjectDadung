namespace Backend.Models;

public sealed class CollectionProduct
{
    public long CollectionId { get; set; }
    public Collection Collection { get; set; } = null!;
    public long ProductId { get; set; }
    public Product Product { get; set; } = null!;
    public int DisplayOrder { get; set; }
}
