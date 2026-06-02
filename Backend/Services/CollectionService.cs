using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Dtos;
using Backend.Enums;
using Backend.Exceptions;
using Backend.Models;
using Backend.Repositories;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Services;

public sealed class CollectionService(ICollectionRepository collectionRepo)
{
    public IReadOnlyList<CollectionResponse> GetCollections() =>
        collectionRepo.GetAll().Select(c => ToCollectionResponse(c)).ToList();

    public CollectionResponse GetCollection(long id) =>
        ToCollectionResponse(collectionRepo.GetById(id) ?? throw new ResourceNotFoundException("Bộ sưu tập không tồn tại."));

    public CollectionResponse CreateCollection(CollectionRequest request)
    {
        var collection = new Collection
        {
            Name = request.Name,
            Slug = request.Slug,
            Description = request.Description,
            CoverImage = request.CoverImage,
            IsPublished = request.IsPublished,
            DisplayOrder = request.DisplayOrder
        };
        collectionRepo.Create(collection);
        return ToCollectionResponse(collection);
    }

    public CollectionResponse UpdateCollection(long id, CollectionRequest request)
    {
        var collection = collectionRepo.GetById(id) ?? throw new ResourceNotFoundException("Bộ sưu tập không tồn tại.");
        collection.Name = request.Name;
        collection.Slug = request.Slug;
        collection.Description = request.Description;
        collection.CoverImage = request.CoverImage;
        collection.IsPublished = request.IsPublished;
        collection.DisplayOrder = request.DisplayOrder;
        collection.UpdatedAt = DateTime.UtcNow;
        collectionRepo.Update(collection);
        return ToCollectionResponse(collection);
    }

    public void DeleteCollection(long id)
    {
        var collection = collectionRepo.GetById(id) ?? throw new ResourceNotFoundException("Bộ sưu tập không tồn tại.");
        collectionRepo.Delete(collection);
    }

    private static CollectionResponse ToCollectionResponse(Collection c) =>
        new(c.Id, c.Name, c.Slug, c.Description, c.CoverImage, c.IsPublished, c.DisplayOrder, c.CreatedAt, c.UpdatedAt);
}