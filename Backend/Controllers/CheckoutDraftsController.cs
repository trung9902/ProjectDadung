using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/checkout-drafts")]
public sealed class CheckoutDraftsController(CheckoutDraftService checkoutDraftService) : ControllerBase
{
    [HttpGet]
    public ActionResult<IReadOnlyList<CheckoutDraftResponse>> GetDrafts() =>
        Ok(checkoutDraftService.GetDrafts());

    [HttpGet("{id:long}")]
    public ActionResult<CheckoutDraftResponse> GetDraft(long id) =>
        Ok(checkoutDraftService.GetDraft(id));

    [HttpPost]
    public ActionResult<CheckoutDraftResponse> CreateDraft(SaveCheckoutDraftRequest request)
    {
        var draft = checkoutDraftService.CreateDraft(request);
        return CreatedAtAction(nameof(GetDraft), new { id = draft.Id }, draft);
    }

    [HttpPut("{id:long}")]
    public ActionResult<CheckoutDraftResponse> UpdateDraft(long id, SaveCheckoutDraftRequest request) =>
        Ok(checkoutDraftService.UpdateDraft(id, request));

    [HttpPatch("{id:long}/payment-method")]
    public ActionResult<CheckoutDraftResponse> UpdatePaymentMethod(long id, UpdateCheckoutPaymentRequest request) =>
        Ok(checkoutDraftService.UpdatePaymentMethod(id, request.PaymentMethod));

    [HttpPatch("{id:long}/coupon")]
    public ActionResult<CheckoutDraftResponse> ApplyCoupon(long id, ApplyCouponRequest request) =>
        Ok(checkoutDraftService.ApplyCoupon(id, request.Code));

    [HttpDelete("{id:long}/coupon")]
    public ActionResult<CheckoutDraftResponse> RemoveCoupon(long id) =>
        Ok(checkoutDraftService.RemoveCoupon(id));

    [HttpPost("{id:long}/complete")]
    public ActionResult<OrderResponse> CompleteDraft(long id) =>
        Ok(checkoutDraftService.CompleteDraft(id));

    [HttpPost("{id:long}/cancel")]
    public ActionResult<OrderResponse> CancelDraft(long id, CancelCheckoutDraftRequest request) =>
        Ok(checkoutDraftService.CancelDraft(id, request.Reason));
}
