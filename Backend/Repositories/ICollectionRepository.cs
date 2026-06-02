using Backend.Models;

namespace Backend.Repositories;

public interface ICollectionRepository
{
    IReadOnlyList<Collection> GetAll();

    Collection? GetById(long id);

    void Create(Collection collection);

    void Update(Collection collection);

    void Delete(Collection collection);
}