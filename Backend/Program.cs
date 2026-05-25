using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddSingleton<Backend.Repositories.IProductRepository, Backend.Repositories.InMemoryProductRepository>();
builder.Services.AddSingleton<Backend.Repositories.IOrderRepository, Backend.Repositories.InMemoryOrderRepository>();
builder.Services.AddSingleton<Backend.Repositories.ICouponRepository, Backend.Repositories.InMemoryCouponRepository>();
builder.Services.AddScoped<Backend.Services.ProductService>();
builder.Services.AddScoped<Backend.Services.OrderService>();
builder.Services.AddScoped<Backend.Services.CouponService>();

var app = builder.Build();

app.UseMiddleware<Backend.Middleware.ExceptionHandlingMiddleware>();
app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("Frontend");
app.UseAuthorization();

app.MapControllers();

app.Run();
