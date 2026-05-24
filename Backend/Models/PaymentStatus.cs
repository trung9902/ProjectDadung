namespace Backend.Models;

public enum PaymentStatus
{
    Unpaid,
    Pending,
    Paid,
    Failed,
    Refunded,
    Cancelled
}
