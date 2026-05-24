using Backend.Models;

namespace Backend.Repositories;

public sealed class InMemoryCheckoutDraftRepository : ICheckoutDraftRepository
{
    private readonly object _lock = new();
    private readonly List<CheckoutDraft> _drafts = [];
    private long _nextId = 1;

    public IReadOnlyList<CheckoutDraft> GetAll()
    {
        lock (_lock)
        {
            return _drafts.OrderByDescending(draft => draft.UpdatedAt).Select(Clone).ToList();
        }
    }

    public CheckoutDraft? GetById(long id)
    {
        lock (_lock)
        {
            var draft = _drafts.FirstOrDefault(item => item.Id == id);
            return draft is null ? null : Clone(draft);
        }
    }

    public CheckoutDraft Add(CheckoutDraft draft)
    {
        lock (_lock)
        {
            draft.Id = _nextId++;
            draft.CreatedAt = DateTime.UtcNow;
            draft.UpdatedAt = draft.CreatedAt;
            _drafts.Add(Clone(draft));
            return Clone(draft);
        }
    }

    public CheckoutDraft? Update(long id, CheckoutDraft draft)
    {
        lock (_lock)
        {
            var index = _drafts.FindIndex(item => item.Id == id);
            if (index < 0)
            {
                return null;
            }

            draft.Id = id;
            draft.CreatedAt = _drafts[index].CreatedAt;
            draft.UpdatedAt = DateTime.UtcNow;
            _drafts[index] = Clone(draft);
            return Clone(draft);
        }
    }

    public bool Delete(long id)
    {
        lock (_lock)
        {
            var draft = _drafts.FirstOrDefault(item => item.Id == id);
            return draft is not null && _drafts.Remove(draft);
        }
    }

    private static CheckoutDraft Clone(CheckoutDraft draft) => new()
    {
        Id = draft.Id,
        Email = draft.Email,
        FirstName = draft.FirstName,
        LastName = draft.LastName,
        Phone = draft.Phone,
        Address = draft.Address,
        Apartment = draft.Apartment,
        City = draft.City,
        State = draft.State,
        Zip = draft.Zip,
        Subtotal = draft.Subtotal,
        ShippingFee = draft.ShippingFee,
        Total = draft.Total,
        PaymentMethod = draft.PaymentMethod,
        PaymentStatus = draft.PaymentStatus,
        CreatedAt = draft.CreatedAt,
        UpdatedAt = draft.UpdatedAt,
        Items = draft.Items.Select(item => new OrderItem
        {
            ProductId = item.ProductId,
            ProductName = item.ProductName,
            UnitPrice = item.UnitPrice,
            Quantity = item.Quantity
        }).ToList()
    };
}
