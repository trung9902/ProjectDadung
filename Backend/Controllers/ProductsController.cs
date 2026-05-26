using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api")]
public sealed class ProductsController(ProductService productService) : ControllerBase
{
    [HttpGet("products")]
    public ActionResult<IReadOnlyList<ProductResponse>> GetProducts([FromQuery] string? category, [FromQuery] string? keyword) =>
        Ok(productService.SearchProducts(category, keyword));

    [HttpGet("products/{id:long}")]
    public ActionResult<ProductResponse> GetProduct(long id) =>
        Ok(productService.GetProduct(id));

    [HttpPost("products")]
    [Authorize(Roles = "Admin")]
    public ActionResult<ProductResponse> CreateProduct(ProductRequest request)
    {
        var product = productService.CreateProduct(request);
        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }

    [HttpPut("products/{id:long}")]
    [Authorize(Roles = "Admin")]
    public ActionResult<ProductResponse> UpdateProduct(long id, ProductRequest request) =>
        Ok(productService.UpdateProduct(id, request));

    [HttpDelete("products/{id:long}")]
    [Authorize(Roles = "Admin")]
    public IActionResult DeleteProduct(long id)
    {
        productService.DeleteProduct(id);
        return NoContent();
    }

    [HttpGet("categories")]
    public ActionResult<IReadOnlyList<string>> GetCategories() =>
        Ok(productService.GetCategories());
}
