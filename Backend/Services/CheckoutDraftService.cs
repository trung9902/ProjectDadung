using Backend.Dtos;
using Backend.Exceptions;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Services;

public sealed class CheckoutDraftService(
    ICheckoutDraftRepository draftRepository,
    IOrderRepository orderRepository,
    IProductRepository productRepository)
{
    public IReadOnlyList<CheckoutDraftResponse> GetDrafts() =>
        draftRepository.GetAll().Select(ToResponse).ToList();

    public CheckoutDraftResponse GetDraft(long id)
    {
        var draft = draftRepository.GetById(id)
            ?? throw new ResourceNotFoundException($"Khong tim thay checkout draft id={id}");

        return ToResponse(draft);
    }

    public CheckoutDraftResponse CreateDraft(SaveCheckoutDraftRequest request) =>
        ToResponse(draftRepository.Add(ToDraft(request)));

    public CheckoutDraftResponse UpdateDraft(long id, SaveCheckoutDraftRequest request)
    {
        var draft = draftRepository.Update(id, ToDraft(request))
            ?? throw new ResourceNotFoundException($"Khong tim thay checkout draft id={id}");

        return ToResponse(draft);
    }

    public CheckoutDraftResponse UpdatePaymentMethod(long id, PaymentMethod paymentMethod)
    {
        var draft = draftRepository.GetById(id)
            ?? throw new ResourceNotFoundException($"Khong tim thay checkout draft id={id}");

        draft.PaymentMethod = paymentMethod;
        draft.PaymentStatus = PaymentStatus.Pending;

        var updatedDraft = draftRepository.Update(id, draft)
            ?? throw new ResourceNotFoundException($"Khong tim thay checkout draft id={id}");

        return ToResponse(updatedDraft);
    }

    public OrderResponse CompleteDraft(long id)
    {
        var draft = draftRepository.GetById(id)
            ?? throw new ResourceNotFoundException($"Khong tim thay checkout draft id={id}");

        var order = ToOrder(draft, OrderStatus.Confirmed);
        order.PaymentStatus = order.PaymentMethod == PaymentMethod.Cod ? PaymentStatus.Unpaid : PaymentStatus.Paid;
        order.PaidAt = order.PaymentStatus == PaymentStatus.Paid ? DateTime.UtcNow : null;

        var savedOrder = orderRepository.Add(order);
        draftRepository.Delete(id);

        return ToOrderResponse(savedOrder);
    }

    public OrderResponse CancelDraft(long id, string? reason)
    {
        var draft = draftRepository.GetById(id)
            ?? throw new ResourceNotFoundException($"Khong tim thay checkout draft id={id}");

        var order = ToOrder(draft, OrderStatus.Cancelled);
        order.PaymentStatus = PaymentStatus.Cancelled;
        order.CancelledAt = DateTime.UtcNow;
        order.CancelReason = string.IsNullOrWhiteSpace(reason) ? "Khach hang huy trong buoc thanh toan" : reason.Trim();

        var savedOrder = orderRepository.Add(order);
        draftRepository.Delete(id);

        return ToOrderResponse(savedOrder);
    }

    private CheckoutDraft ToDraft(SaveCheckoutDraftRequest request)
    {
        var draft = new CheckoutDraft
        {
            Email = request.Email.Trim(),
            FirstName = request.FirstName.Trim(),
            LastName = request.LastName.Trim(),
            Phone = request.Phone?.Trim(),
            Address = request.Address.Trim(),
            Apartment = request.Apartment?.Trim(),
            City = request.City.Trim(),
            State = request.State?.Trim(),
            Zip = request.Zip?.Trim(),
            PaymentMethod = request.PaymentMethod,
            PaymentStatus = request.PaymentMethod is null ? PaymentStatus.Unpaid : PaymentStatus.Pending
        };

        foreach (var itemRequest in request.Items)
        {
            var product = productRepository.GetById(itemRequest.ProductId)
                ?? throw new ResourceNotFoundException($"Khong tim thay san pham id={itemRequest.ProductId}");

            if (itemRequest.Quantity > product.Stock)
            {
                throw new BadRequestException($"San pham {product.Name} chi con {product.Stock}");
            }

            draft.Items.Add(new OrderItem
            {
                ProductId = product.Id,
                ProductName = product.Name,
                UnitPrice = product.Price,
                Quantity = itemRequest.Quantity
            });
        }

        draft.Subtotal = draft.Items.Sum(item => item.LineTotal);
        draft.ShippingFee = 0;
        draft.Total = draft.Subtotal + draft.ShippingFee;

        return draft;
    }

    private static CustomerOrder ToOrder(CheckoutDraft draft, OrderStatus status) => new()
    {
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
        Status = status,
        PaymentMethod = draft.PaymentMethod ?? PaymentMethod.Cod,
        PaymentStatus = draft.PaymentStatus,
        CreatedAt = DateTime.UtcNow,
        Items = draft.Items.Select(item => new OrderItem
        {
            ProductId = item.ProductId,
            ProductName = item.ProductName,
            UnitPrice = item.UnitPrice,
            Quantity = item.Quantity
        }).ToList()
    };

    private static CheckoutDraftResponse ToResponse(CheckoutDraft draft) => new(
        draft.Id,
        draft.Email,
        $"{draft.FirstName} {draft.LastName}",
        draft.Address,
        draft.City,
        draft.Subtotal,
        draft.ShippingFee,
        draft.Total,
        draft.PaymentMethod,
        draft.PaymentStatus,
        draft.CreatedAt,
        draft.UpdatedAt,
        draft.Items.Select(item => new OrderItemResponse(
            item.ProductId,
            item.ProductName,
            item.UnitPrice,
            item.Quantity,
            item.LineTotal)).ToList());

    private static OrderResponse ToOrderResponse(CustomerOrder order) => new(
        order.Id,
        order.Email,
        $"{order.FirstName} {order.LastName}",
        order.Address,
        order.City,
        order.Subtotal,
        order.ShippingFee,
        order.Total,
        order.Status,
        order.PaymentMethod,
        order.PaymentStatus,
        order.PaymentTransactionId,
        order.CreatedAt,
        order.PaidAt,
        order.CancelledAt,
        order.CancelReason,
        order.Items.Select(item => new OrderItemResponse(
            item.ProductId,
            item.ProductName,
            item.UnitPrice,
            item.Quantity,
            item.LineTotal)).ToList());
}
