using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Dtos;
using Backend.Exceptions;
using Backend.Models;
using Backend.Repositories;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Services;

public sealed class AuthService(IUserRepository userRepo, IConfiguration config)
{
    public async Task<LoginResponse> RegisterAsync(RegisterRequest req)
    {
        if (await userRepo.EmailExistsAsync(req.Email))
            throw new BadRequestException("Email đã được sử dụng.");

        var user = new User
        {
            Email = req.Email.ToLower(),
            FullName = req.FullName,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(req.Password),
            Role = UserRole.Customer
        };

        await userRepo.CreateAsync(user);
        return BuildLoginResponse(user);
    }

    public async Task<LoginResponse> LoginAsync(LoginRequest req)
    {
        var user = await userRepo.FindByEmailAsync(req.Email.ToLower())
            ?? throw new BadRequestException("Email hoặc mật khẩu không đúng.");

        if (!BCrypt.Net.BCrypt.Verify(req.Password, user.PasswordHash))
            throw new BadRequestException("Email hoặc mật khẩu không đúng.");

        return BuildLoginResponse(user);
    }

    public async Task<UserResponse> GetCurrentUserAsync(long userId)
    {
        var user = await userRepo.FindByIdAsync(userId)
            ?? throw new ResourceNotFoundException("Người dùng không tồn tại.");
        return ToUserResponse(user);
    }

    private LoginResponse BuildLoginResponse(User user) =>
        new(GenerateToken(user), ToUserResponse(user));

    private string GenerateToken(User user)
    {
        var jwtSettings = config.GetSection("JwtSettings");
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role.ToString()),
            new Claim("fullName", user.FullName)
        };

        var token = new JwtSecurityToken(
            issuer: jwtSettings["Issuer"],
            audience: jwtSettings["Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(double.Parse(jwtSettings["ExpireMinutes"]!)),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    private static UserResponse ToUserResponse(User u) =>
        new(u.Id, u.Email, u.FullName, u.Role.ToString(), u.CreatedAt);
}
