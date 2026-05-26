using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/orders")]
public sealed class OrdersController(OrderService orderService) : ControllerBase
{
    [HttpGet]
    public ActionResult<IReadOnlyList<OrderResponse>> GetOrders() =>
        Ok(orderService.GetOrders());

    [HttpGet("{id:long}")]
    public ActionResult<OrderResponse> GetOrder(long id) =>
        Ok(orderService.GetOrder(id));

    [HttpPost]
    public ActionResult<OrderResponse> CreateOrder(CreateOrderRequest request)
    {
        var order = orderService.CreateOrder(request);
        return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
    }

    [HttpPatch("{id:long}/status")]
    [Authorize(Roles = "Admin")]
    public ActionResult<OrderResponse> UpdateStatus(long id, UpdateOrderStatusRequest request) =>
        Ok(orderService.UpdateStatus(id, request.Status));
}
