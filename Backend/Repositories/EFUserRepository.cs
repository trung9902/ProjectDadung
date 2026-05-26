using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories;

public sealed class EFUserRepository(AppDbContext db) : IUserRepository
{
    public Task<User?> FindByEmailAsync(string email) =>
        db.Users.FirstOrDefaultAsync(u => u.Email == email);

    public Task<User?> FindByIdAsync(long id) =>
        db.Users.FindAsync(id).AsTask();

    public async Task<User> CreateAsync(User user)
    {
        db.Users.Add(user);
        await db.SaveChangesAsync();
        return user;
    }

    public Task<bool> EmailExistsAsync(string email) =>
        db.Users.AnyAsync(u => u.Email == email);

    public async Task<IReadOnlyList<User>> GetAllAsync() =>
        await db.Users.OrderByDescending(u => u.CreatedAt).ToListAsync();
}
