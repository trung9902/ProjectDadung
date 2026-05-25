using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/coupons")]
public sealed class CouponsController(CouponService couponService) : ControllerBase
{
    [HttpPost("validate")]
    public ActionResult<CouponValidationResponse> ValidateCoupon(ValidateCouponRequest request) =>
        Ok(couponService.ValidateCoupon(request.Code, request.Subtotal));
}
