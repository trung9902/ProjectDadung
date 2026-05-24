using Backend.Models;

namespace Backend.Repositories;

public interface IOrderRepository
{
    IReadOnlyList<CustomerOrder> GetAll();
    CustomerOrder? GetById(long id);
    CustomerOrder Add(CustomerOrder order);
    CustomerOrder? UpdateStatus(long id, OrderStatus status);
}
