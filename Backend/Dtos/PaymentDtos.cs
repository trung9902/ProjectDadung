using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos;

public sealed record CreatePaymentRequest(
    string? OrderId,
    [Range(0, double.MaxValue)] decimal? Amount);

