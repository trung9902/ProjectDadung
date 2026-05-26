using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/payment")]
public sealed class PaymentController(VnPayService vnPayService) : ControllerBase
{
    [HttpPost("create")]
    public IActionResult Create(CreatePaymentRequest? request)
    {
        var orderId = string.IsNullOrWhiteSpace(request?.OrderId) ? "DH001" : request.OrderId;
        var amount = request?.Amount is > 0 ? request.Amount.Value : 50000m;

        var url = vnPayService.CreatePaymentUrl(
            HttpContext,
            orderId,
            amount
        );

        return Ok(new
        {
            paymentUrl = url
        });
    }
}

