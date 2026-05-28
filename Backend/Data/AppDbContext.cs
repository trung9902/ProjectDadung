using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System.Text.Json;

namespace Backend.Data;

public sealed class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<CustomerOrder> Orders => Set<CustomerOrder>();
    public DbSet<Coupon> Coupons => Set<Coupon>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var stringListConverter = new ValueConverter<List<string>, string>(
            value => JsonSerializer.Serialize(value, (JsonSerializerOptions?)null),
            value => JsonSerializer.Deserialize<List<string>>(value, (JsonSerializerOptions?)null) ?? new List<string>());

        var stringListComparer = new ValueComparer<List<string>>(
            (left, right) => left != null && right != null && left.SequenceEqual(right),
            value => value.Aggregate(0, (hash, item) => HashCode.Combine(hash, item.GetHashCode())),
            value => value.ToList());

        modelBuilder.Entity<User>(e =>
        {
            e.HasKey(u => u.Id);
            e.HasIndex(u => u.Email).IsUnique();
            e.Property(u => u.Email).HasMaxLength(256).IsRequired();
            e.Property(u => u.PasswordHash).HasMaxLength(512).IsRequired();
            e.Property(u => u.FullName).HasMaxLength(200).IsRequired();
            e.Property(u => u.Role).HasConversion<string>();
        });

        modelBuilder.Entity<Product>(e =>
        {
            e.HasKey(p => p.Id);
            e.HasIndex(p => p.Category);
            e.Property(p => p.Category).HasMaxLength(120).IsRequired();
            e.Property(p => p.Name).HasMaxLength(250).IsRequired();
            e.Property(p => p.Price).HasPrecision(18, 2);
            e.Property(p => p.OldPrice).HasPrecision(18, 2);
            e.Property(p => p.Image).HasMaxLength(1000).IsRequired();
            e.Property(p => p.Description).HasMaxLength(4000).IsRequired();
            e.Property(p => p.Gallery)
                .HasConversion(stringListConverter)
                .Metadata.SetValueComparer(stringListComparer);

            e.OwnsMany(p => p.Badges, badge =>
            {
                badge.ToTable("ProductBadges");
                badge.WithOwner().HasForeignKey("ProductId");
                badge.Property<long>("Id");
                badge.HasKey("Id");
                badge.Property(b => b.Label).HasMaxLength(100).IsRequired();
                badge.Property(b => b.Variant).HasMaxLength(50).IsRequired();
            });

            e.OwnsMany(p => p.Specs, spec =>
            {
                spec.ToTable("ProductSpecs");
                spec.WithOwner().HasForeignKey("ProductId");
                spec.Property<long>("Id");
                spec.HasKey("Id");
                spec.Property(s => s.Name).HasMaxLength(120).IsRequired();
                spec.Property(s => s.Value).HasMaxLength(500).IsRequired();
            });
        });

        modelBuilder.Entity<CustomerOrder>(e =>
        {
            e.ToTable("Orders");
            e.HasKey(o => o.Id);
            e.HasIndex(o => o.Email);
            e.Property(o => o.Email).HasMaxLength(256).IsRequired();
            e.Property(o => o.FirstName).HasMaxLength(100).IsRequired();
            e.Property(o => o.LastName).HasMaxLength(100).IsRequired();
            e.Property(o => o.Phone).HasMaxLength(30);
            e.Property(o => o.Address).HasMaxLength(500).IsRequired();
            e.Property(o => o.Apartment).HasMaxLength(200);
            e.Property(o => o.City).HasMaxLength(100).IsRequired();
            e.Property(o => o.State).HasMaxLength(100);
            e.Property(o => o.Zip).HasMaxLength(30);
            e.Property(o => o.Subtotal).HasPrecision(18, 2);
            e.Property(o => o.ShippingFee).HasPrecision(18, 2);
            e.Property(o => o.DiscountAmount).HasPrecision(18, 2);
            e.Property(o => o.CouponCode).HasMaxLength(100);
            e.Property(o => o.Total).HasPrecision(18, 2);
            e.Property(o => o.CancelReason).HasMaxLength(1000);
            e.Property(o => o.Status).HasConversion<string>().HasMaxLength(50);
            e.Property(o => o.PaymentMethod).HasConversion<string>().HasMaxLength(50);
            e.Property(o => o.PaymentStatus).HasConversion<string>().HasMaxLength(50);
            e.Property(o => o.PaymentTransactionId).HasMaxLength(200);

            e.OwnsMany(o => o.Items, item =>
            {
                item.ToTable("OrderItems");
                item.WithOwner().HasForeignKey("OrderId");
                item.Property<long>("Id");
                item.HasKey("Id");
                item.Property(i => i.ProductName).HasMaxLength(250).IsRequired();
                item.Property(i => i.UnitPrice).HasPrecision(18, 2);
                item.Ignore(i => i.LineTotal);
            });
        });

        modelBuilder.Entity<Coupon>(e =>
        {
            e.HasKey(c => c.Id);
            e.HasIndex(c => c.Code).IsUnique();
            e.Property(c => c.Code).HasMaxLength(100).IsRequired();
            e.Property(c => c.DiscountType).HasConversion<string>().HasMaxLength(50);
            e.Property(c => c.DiscountValue).HasPrecision(18, 2);
            e.Property(c => c.MinOrderValue).HasPrecision(18, 2);
        });
    }
}
