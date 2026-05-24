using Backend.Models;

namespace Backend.Repositories;

public interface ICheckoutDraftRepository
{
    IReadOnlyList<CheckoutDraft> GetAll();
    CheckoutDraft? GetById(long id);
    CheckoutDraft Add(CheckoutDraft draft);
    CheckoutDraft? Update(long id, CheckoutDraft draft);
    bool Delete(long id);
}
