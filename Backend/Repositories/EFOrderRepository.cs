using Backend.Data;
using Backend.Enums;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories;

public sealed class EFOrderRepository(AppDbContext db) : IOrderRepository
{
    public IReadOnlyList<CustomerOrder> GetAll() =>
        db.Orders
            .AsNoTracking()
            .Include(order => order.Items)
            .OrderByDescending(order => order.CreatedAt)
            .ToList();

    public CustomerOrder? GetById(long id) =>
        db.Orders
            .AsNoTracking()
            .Include(order => order.Items)
            .FirstOrDefault(order => order.Id == id);

    public CustomerOrder Add(CustomerOrder order)
    {
        db.Orders.Add(order);
        db.SaveChanges();
        return order;
    }

    public CustomerOrder? UpdateStatus(long id, OrderStatus status)
    {
        var order = db.Orders
            .Include(item => item.Items)
            .FirstOrDefault(order => order.Id == id);

        if (order is null)
        {
            return null;
        }

        order.Status = status;
        db.SaveChanges();
        return order;
    }
}
