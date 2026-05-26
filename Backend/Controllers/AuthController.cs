using System.Security.Claims;
using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/auth")]
public sealed class AuthController(AuthService authService) : ControllerBase
{
    [HttpPost("register")]
    public async Task<ActionResult<LoginResponse>> Register(RegisterRequest request) =>
        Ok(await authService.RegisterAsync(request));

    [HttpPost("login")]
    public async Task<ActionResult<LoginResponse>> Login(LoginRequest request) =>
        Ok(await authService.LoginAsync(request));

    [HttpGet("me")]
    [Authorize]
    public async Task<ActionResult<UserResponse>> Me()
    {
        var userId = long.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? User.FindFirstValue("sub")!);
        return Ok(await authService.GetCurrentUserAsync(userId));
    }
}
