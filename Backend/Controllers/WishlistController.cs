using System.Security.Claims;
using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Authorize]
[Route("api/wishlist")]
public sealed class WishlistController(WishlistService wishlistService) : ControllerBase
{
    [HttpGet]
    public ActionResult<IReadOnlyList<WishlistItemResponse>> GetWishlist() =>
        Ok(wishlistService.GetWishlist(GetCurrentUserId()));

    [HttpPost("{productId:long}")]
    public ActionResult<WishlistItemResponse> AddToWishlist(long productId) =>
        Ok(wishlistService.AddToWishlist(GetCurrentUserId(), productId));

    [HttpDelete("{productId:long}")]
    public IActionResult RemoveFromWishlist(long productId)
    {
        wishlistService.RemoveFromWishlist(GetCurrentUserId(), productId);
        return NoContent();
    }

    [HttpDelete]
    public IActionResult ClearWishlist()
    {
        wishlistService.ClearWishlist(GetCurrentUserId());
        return NoContent();
    }

    [HttpGet("{productId:long}/status")]
    public ActionResult<WishlistStatusResponse> GetStatus(long productId) =>
        Ok(wishlistService.GetStatus(GetCurrentUserId(), productId));

    private long GetCurrentUserId() =>
        long.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? User.FindFirstValue("sub")!);
}
