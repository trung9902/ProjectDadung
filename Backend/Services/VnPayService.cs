using System.Globalization;
using System.Net;
using System.Security.Cryptography;
using System.Text;

namespace Backend.Services;

public sealed class VnPayService
{
    private readonly IConfiguration _configuration;

    public VnPayService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string CreatePaymentUrl(HttpContext httpContext, string orderId, decimal amount)
    {
        var paymentUrl = GetConfig("VnPay:PaymentUrl");
        var tmnCode = GetConfig("VnPay:TmnCode");
        var hashSecret = GetConfig("VnPay:HashSecret");
        var returnUrl = GetReturnUrl(httpContext);

        var txnRef = NormalizeTxnRef(orderId);
        var createDate = GetVietnamTime().ToString("yyyyMMddHHmmss", CultureInfo.InvariantCulture);
        var vnpAmount = ((long)Math.Round(amount, 0, MidpointRounding.AwayFromZero) * 100)
            .ToString(CultureInfo.InvariantCulture);

        var parameters = new SortedDictionary<string, string>(StringComparer.Ordinal)
        {
            ["vnp_Version"] = "2.1.0",
            ["vnp_Command"] = "pay",
            ["vnp_TmnCode"] = tmnCode,
            ["vnp_Amount"] = vnpAmount,
            ["vnp_CreateDate"] = createDate,
            ["vnp_CurrCode"] = "VND",
            ["vnp_IpAddr"] = GetClientIpAddress(httpContext),
            ["vnp_Locale"] = _configuration["VnPay:Locale"] ?? "vn",
            ["vnp_OrderInfo"] = $"Thanh toan don hang {txnRef}",
            ["vnp_OrderType"] = _configuration["VnPay:OrderType"] ?? "other",
            ["vnp_ReturnUrl"] = returnUrl,
            ["vnp_TxnRef"] = txnRef
        };

        var signData = BuildQueryString(parameters);
        var secureHash = CreateSecureHash(hashSecret, signData);

        return $"{paymentUrl}?{signData}&vnp_SecureHash={secureHash}";
    }

    private string GetConfig(string key)
    {
        var value = _configuration[key];

        if (string.IsNullOrWhiteSpace(value))
        {
            throw new InvalidOperationException($"Thiếu cấu hình: {key}");
        }

        return value;
    }

    private string GetReturnUrl(HttpContext httpContext)
    {
        var returnUrl = _configuration["VnPay:ReturnUrl"];

        if (!string.IsNullOrWhiteSpace(returnUrl))
        {
            return returnUrl;
        }

        return $"{httpContext.Request.Scheme}://{httpContext.Request.Host}/api/payment/vnpay-return";
    }

    private static string BuildQueryString(IEnumerable<KeyValuePair<string, string>> parameters)
    {
        return string.Join("&", parameters.Select(x =>
            $"{WebUtility.UrlEncode(x.Key)}={WebUtility.UrlEncode(x.Value)}"));
    }

    private static string CreateSecureHash(string hashSecret, string signData)
    {
        using var hmac = new HMACSHA512(Encoding.UTF8.GetBytes(hashSecret));
        var hashBytes = hmac.ComputeHash(Encoding.UTF8.GetBytes(signData));

        return Convert.ToHexString(hashBytes).ToLowerInvariant();
    }

    private static string GetClientIpAddress(HttpContext httpContext)
    {
        var forwardedFor = httpContext.Request.Headers["X-Forwarded-For"].FirstOrDefault();

        var ip = forwardedFor?.Split(',').FirstOrDefault()?.Trim()
            ?? httpContext.Connection.RemoteIpAddress?.ToString()
            ?? "127.0.0.1";

        return ip == "::1" ? "127.0.0.1" : ip;
    }

    private static string NormalizeTxnRef(string orderId)
    {
        var normalized = new string(orderId.Where(char.IsLetterOrDigit).ToArray());

        return string.IsNullOrWhiteSpace(normalized)
            ? DateTimeOffset.UtcNow.ToUnixTimeMilliseconds().ToString(CultureInfo.InvariantCulture)
            : normalized;
    }

    private static DateTime GetVietnamTime()
    {
        try
        {
            var timeZone = TimeZoneInfo.FindSystemTimeZoneById("SE Asia Standard Time");
            return TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, timeZone);
        }
        catch
        {
            return DateTime.UtcNow.AddHours(7);
        }
    }
}