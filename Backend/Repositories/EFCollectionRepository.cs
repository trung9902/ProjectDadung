using Backend.Data;
using Backend.Models;

namespace Backend.Repositories;

public sealed class EFCollectionRepository(
    AppDbContext context)
    : ICollectionRepository
{
    public IReadOnlyList<Collection> GetAll()
    {
        return context.Collections.ToList();
    }

    public Collection? GetById(long id)
    {
        return context.Collections
            .FirstOrDefault(x => x.Id == id);
    }

    public void Create(Collection collection)
    {
        context.Collections.Add(collection);

        context.SaveChanges();
    }

    public void Update(Collection collection)
    {
        context.Collections.Update(collection);

        context.SaveChanges();
    }

    public void Delete(Collection collection)
    {
        context.Collections.Remove(collection);

        context.SaveChanges();
    }
}