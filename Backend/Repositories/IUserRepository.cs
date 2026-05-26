using Backend.Models;

namespace Backend.Repositories;

public interface IUserRepository
{
    Task<User?> FindByEmailAsync(string email);
    Task<User?> FindByIdAsync(long id);
    Task<User> CreateAsync(User user);
    Task<bool> EmailExistsAsync(string email);
    Task<IReadOnlyList<User>> GetAllAsync();
}
