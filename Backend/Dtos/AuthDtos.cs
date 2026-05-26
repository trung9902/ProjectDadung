using System.ComponentModel.DataAnnotations;
using Backend.Models;

namespace Backend.Dtos;

public record RegisterRequest(
    [Required, EmailAddress] string Email,
    [Required, MinLength(6)] string Password,
    [Required] string FullName
);

public record LoginRequest(
    [Required, EmailAddress] string Email,
    [Required] string Password
);

public record LoginResponse(
    string Token,
    UserResponse User
);

public record UserResponse(
    long Id,
    string Email,
    string FullName,
    string Role,
    DateTime CreatedAt
);
