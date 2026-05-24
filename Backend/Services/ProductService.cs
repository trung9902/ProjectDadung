using Backend.Dtos;
using Backend.Exceptions;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Services;

public sealed class ProductService(IProductRepository productRepository)
{
    public IReadOnlyList<ProductResponse> SearchProducts(string? category, string? keyword) =>
        productRepository.Search(category, keyword).Select(ToResponse).ToList();

    public ProductResponse GetProduct(long id)
    {
        var product = productRepository.GetById(id)
            ?? throw new ResourceNotFoundException($"Khong tim thay san pham id={id}");

        return ToResponse(product);
    }

    public IReadOnlyList<string> GetCategories() => productRepository.GetCategories();

    public ProductResponse CreateProduct(ProductRequest request) =>
        ToResponse(productRepository.Add(ToProduct(request)));

    public ProductResponse UpdateProduct(long id, ProductRequest request)
    {
        var product = productRepository.Update(id, ToProduct(request))
            ?? throw new ResourceNotFoundException($"Khong tim thay san pham id={id}");

        return ToResponse(product);
    }

    public void DeleteProduct(long id)
    {
        if (!productRepository.Delete(id))
        {
            throw new ResourceNotFoundException($"Khong tim thay san pham id={id}");
        }
    }

    private static Product ToProduct(ProductRequest request) => new()
    {
        Category = request.Category.Trim(),
        Name = request.Name.Trim(),
        Price = request.Price,
        OldPrice = request.OldPrice,
        Rating = request.Rating,
        Sold = request.Sold,
        Stock = request.Stock,
        Image = request.Image.Trim(),
        Description = request.Description.Trim(),
        Gallery = request.Gallery?.Select(item => item.Trim()).Where(item => item.Length > 0).ToList() ?? [],
        Badges = request.Badges?.ToList() ?? [],
        Specs = request.Specs?.ToList() ?? []
    };

    private static ProductResponse ToResponse(Product product) => new(
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
