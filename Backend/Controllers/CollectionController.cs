using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api")]
public sealed class CollectionController(CollectionService collectionService) : ControllerBase
{
    [HttpGet("collections")]
    public ActionResult<IReadOnlyList<CollectionResponse>> GetCollections() =>
        Ok(collectionService.GetCollections());

    [HttpGet("collections/{id:long}")]
    public ActionResult<CollectionResponse> GetCollection(long id) =>
        Ok(collectionService.GetCollection(id));

    [HttpPost("collections")]
    [Authorize(Roles = "Admin")]
    public ActionResult<CollectionResponse> CreateCollection(CollectionRequest request)
    {
        var collection = collectionService.CreateCollection(request);
        return CreatedAtAction(nameof(GetCollection), new { id = collection.Id }, collection);
    }

    [HttpPut("collections/{id:long}")]
    [Authorize(Roles = "Admin")]
    public ActionResult<CollectionResponse> UpdateCollection(long id, CollectionRequest request) =>
        Ok(collectionService.UpdateCollection(id, request));

    [HttpDelete("collections/{id:long}")]
    [Authorize(Roles = "Admin")]
    public IActionResult DeleteCollection(long id)
    {
        collectionService.DeleteCollection(id);
        return NoContent();
    }
}