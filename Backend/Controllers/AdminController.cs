using Backend.Dtos;
using Backend.Models;
using Backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/admin")]
[Authorize(Roles = "Admin")]
public sealed class AdminController(
    IOrderRepository orderRepo,
    IProductRepository productRepo,
    IUserRepository userRepo) : ControllerBase
{
    [HttpGet("dashboard")]
    public async Task<ActionResult<DashboardResponse>> GetDashboard()
    {
        var orders = orderRepo.GetAll();
        var products = productRepo.Search(null, null);
        var users = await userRepo.GetAllAsync();

        var revenue = orders
            .Where(o => o.Status != OrderStatus.Cancelled)
            .Sum(o => o.Total);

        var recentOrders = orders.Take(5).Select(o => new RecentOrderItem(
            o.Id,
            $"{o.FirstName} {o.LastName}",
            o.Email,
            o.Total,
            o.Status.ToString(),
            o.CreatedAt
        )).ToList();

        return Ok(new DashboardResponse(
            TotalRevenue: revenue,
            TotalOrders: orders.Count,
            TotalProducts: products.Count,
            TotalUsers: users.Count,
            RecentOrders: recentOrders
        ));
    }

    [HttpGet("users")]
    public async Task<ActionResult<IReadOnlyList<UserResponse>>> GetUsers()
    {
        var users = await userRepo.GetAllAsync();
        return Ok(users.Select(u => new UserResponse(u.Id, u.Email, u.FullName, u.Role.ToString(), u.CreatedAt)));
    }
}

public record DashboardResponse(
    decimal TotalRevenue,
    int TotalOrders,
    int TotalProducts,
    int TotalUsers,
    List<RecentOrderItem> RecentOrders
);

public record RecentOrderItem(
    long Id,
    string CustomerName,
    string Email,
    decimal Total,
    string Status,
    DateTime CreatedAt
);
