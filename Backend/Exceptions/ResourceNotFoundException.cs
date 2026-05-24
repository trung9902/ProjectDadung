namespace Backend.Exceptions;

public sealed class ResourceNotFoundException(string message) : ApiException(message, StatusCodes.Status404NotFound);
