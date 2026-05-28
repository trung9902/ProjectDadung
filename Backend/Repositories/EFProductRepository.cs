using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories;

public sealed class EFProductRepository(AppDbContext db) : IProductRepository
{
    public IReadOnlyList<Product> Search(string? category, string? keyword)
    {
        var query = ProductsWithDetails().AsQueryable();

        if (!string.IsNullOrWhiteSpace(category))
        {
            var trimmedCategory = category.Trim();
            query = query.Where(product => product.Category == trimmedCategory);
        }

        if (!string.IsNullOrWhiteSpace(keyword))
        {
            var trimmedKeyword = keyword.Trim();
            query = query.Where(product => product.Name.Contains(trimmedKeyword));
        }

        return query.OrderBy(product => product.Id).ToList();
    }

    public IReadOnlyList<string> GetCategories() =>
        db.Products
            .AsNoTracking()
            .Select(product => product.Category)
            .Distinct()
            .OrderBy(category => category)
            .ToList();

    public Product? GetById(long id) =>
        ProductsWithDetails()
            .FirstOrDefault(product => product.Id == id);

    public Product Add(Product product)
    {
        db.Products.Add(product);
        db.SaveChanges();
        return product;
    }

    public Product? Update(long id, Product product)
    {
        var existing = db.Products
            .Include(item => item.Badges)
            .Include(item => item.Specs)
            .FirstOrDefault(item => item.Id == id);

        if (existing is null)
        {
            return null;
        }

        existing.Category = product.Category;
        existing.Name = product.Name;
        existing.Price = product.Price;
        existing.OldPrice = product.OldPrice;
        existing.Rating = product.Rating;
        existing.Sold = product.Sold;
        existing.Stock = product.Stock;
        existing.Image = product.Image;
        existing.Description = product.Description;
        existing.Gallery = [.. product.Gallery];
        existing.Badges = [.. product.Badges];
        existing.Specs = [.. product.Specs];

        db.SaveChanges();
        return existing;
    }

    public bool Delete(long id)
    {
        var product = db.Products.Find(id);
        if (product is null)
        {
            return false;
        }

        db.Products.Remove(product);
        db.SaveChanges();
        return true;
    }

    private IQueryable<Product> ProductsWithDetails() =>
        db.Products
            .AsNoTracking()
            .Include(product => product.Badges)
            .Include(product => product.Specs);
}
