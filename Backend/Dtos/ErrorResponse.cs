namespace Backend.Dtos;

public sealed record ErrorResponse(int Status, string Message, DateTime Timestamp);
