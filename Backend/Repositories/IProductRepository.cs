using Backend.Models;

namespace Backend.Repositories;

public interface IProductRepository
{
    IReadOnlyList<Product> Search(string? category, string? keyword);
    IReadOnlyList<string> GetCategories();
    Product? GetById(long id);
    Product Add(Product product);
    Product? Update(long id, Product product);
    bool Delete(long id);
}
