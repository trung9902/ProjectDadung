using Backend.Models;

namespace Backend.Repositories;

public sealed class InMemoryProductRepository : IProductRepository
{
    private readonly object _lock = new();
    private readonly List<Product> _products;
    private long _nextId;

    public InMemoryProductRepository()
    {
        _products = SeedProducts();
        _nextId = _products.Max(product => product.Id) + 1;
    }

    public IReadOnlyList<Product> Search(string? category, string? keyword)
    {
        lock (_lock)
        {
            return _products
                .Where(product => string.IsNullOrWhiteSpace(category)
                    || string.Equals(product.Category, category.Trim(), StringComparison.OrdinalIgnoreCase))
                .Where(product => string.IsNullOrWhiteSpace(keyword)
                    || product.Name.Contains(keyword.Trim(), StringComparison.OrdinalIgnoreCase))
                .OrderBy(product => product.Id)
                .Select(Clone)
                .ToList();
        }
    }

    public IReadOnlyList<string> GetCategories()
    {
        lock (_lock)
        {
            return _products.Select(product => product.Category)
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .OrderBy(category => category)
                .ToList();
        }
    }

    public Product? GetById(long id)
    {
        lock (_lock)
        {
            var product = _products.FirstOrDefault(item => item.Id == id);
            return product is null ? null : Clone(product);
        }
    }

    public Product Add(Product product)
    {
        lock (_lock)
        {
            product.Id = _nextId++;
            _products.Add(Clone(product));
            return Clone(product);
        }
    }

    public Product? Update(long id, Product product)
    {
        lock (_lock)
        {
            var index = _products.FindIndex(item => item.Id == id);
            if (index < 0)
            {
                return null;
            }

            product.Id = id;
            _products[index] = Clone(product);
            return Clone(product);
        }
    }

    public bool Delete(long id)
    {
        lock (_lock)
        {
            var product = _products.FirstOrDefault(item => item.Id == id);
            return product is not null && _products.Remove(product);
        }
    }

    private static Product Clone(Product product) => new()
    {
        Id = product.Id,
        Category = product.Category,
        Name = product.Name,
        Price = product.Price,
        OldPrice = product.OldPrice,
        Rating = product.Rating,
        Sold = product.Sold,
        Stock = product.Stock,
        Image = product.Image,
        Description = product.Description,
        Gallery = [.. product.Gallery],
        Badges = [.. product.Badges],
        Specs = [.. product.Specs]
    };

    private static List<Product> SeedProducts() =>
    [
        Product(1, "Do dung nha bep", "May pha ca phe cao cap", 4800000, 5200000, 4.8, 120, 18,
            "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
            "May pha ca phe cao cap voi thiet ke nho gon, chiet xuat on dinh va thao tac don gian.",
            ["GIAM 10%:discount"], ["Cong suat:1450W", "Dung tich binh nuoc:1.8 lit", "Ap suat bom:15 bar"],
            ["https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"]),
        Product(2, "Phong khach", "Den trang tri hien dai", 2300000, null, 4.5, 80, 25,
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
            "Den trang tri kieu dang toi gian, anh sang am va de phoi voi nhieu phong cach noi that.",
            ["MOI:new"], ["Chat lieu:Kim loai son tinh dien", "Mau anh sang:Vang am"],
            ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80"]),
        Product(3, "Phong tam", "Ke treo khan inox", 890000, null, 4.2, 55, 40,
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
            "Ke treo khan inox chong gi, chac chan, tiet kiem dien tich.",
            [], ["Chat lieu:Inox 304", "Tai trong:Toi da 12 kg"],
            ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"]),
        Product(4, "Do dung nha bep", "Bo noi chong dinh", 3200000, 3900000, 4.7, 200, 12,
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
            "Bo noi chong dinh phu lop ben bi, truyen nhiet deu va de ve sinh.",
            ["HOT:hot"], ["So mon:5 mon", "Loai bep:Gas, hong ngoai, tu"],
            ["https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"]),
        Product(5, "Phong khach", "Ghe sofa mini", 9500000, null, 5.0, 40, 7,
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
            "Ghe sofa mini em ai, kich thuoc vua phai cho can ho nho.",
            ["BEST SELLER:best"], ["Chat lieu boc:Vai cao cap", "So cho ngoi:2 cho"],
            ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"]),
        Product(6, "Phong tam", "Guong LED thong minh", 4100000, 4600000, 4.6, 90, 15,
            "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
            "Guong LED thong minh co cam ung cham, anh sang diu mat va chong mo.",
            ["GIAM 15%:discount"], ["Kich thuoc:70 x 90 cm", "Chuan chong nuoc:IP44"],
            ["https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"]),
        Product(7, "Thiet bi thong minh", "Loa khong day Studio", 6990000, 8200000, 4.9, 150, 10,
            "https://images.unsplash.com/photo-1518449078785-1e1a1b8c8c9c?auto=format&fit=crop&w=1200&q=80",
            "Loa khong day voi am thanh chat luong cao va ket noi Bluetooth tien loi.",
            ["GIAM 15%:discount"], ["Cong suat:50W", "Ket noi:Bluetooth 5.0, AUX"],
            ["https://images.unsplash.com/photo-1518449078785-1e1a1b8c8c9c?auto=format&fit=crop&w=1200&q=80"]),
        Product(8, "May giat & say", "May giat thong minh", 12500000, null, 4.7, 70, 5,
            "https://images.unsplash.com/photo-1581579181916-9c8a1b8c8c9c?auto=format&fit=crop&w=1200&q=80",
            "May giat thong minh voi cong nghe AI, tiet kiem nuoc va dien nang.",
            ["MOI:new"], ["Dung tich:10 kg", "Ket noi:Wi-Fi, dieu khien qua app"],
            ["https://images.unsplash.com/photo-1581579181916-9c8a1b8c8c9c?auto=format&fit=crop&w=1200&q=80"]),
        Product(9, "Do gia dung", "May pha ca phe mini", 4800000, null, 4.8, 120, 18,
            "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
            "May pha ca phe mini phu hop cho gia dinh, van phong nho hoac goc bep hien dai.",
            [], ["Bao hanh:24 thang"],
            ["https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80"])
    ];

    private static Product Product(long id, string category, string name, decimal price, decimal? oldPrice,
        double rating, int sold, int stock, string image, string description, string[] badges, string[] specs,
        string[] gallery) => new()
    {
        Id = id,
        Category = category,
        Name = name,
        Price = price,
        OldPrice = oldPrice,
        Rating = rating,
        Sold = sold,
        Stock = stock,
        Image = image,
        Description = description,
        Gallery = [.. gallery],
        Badges = badges.Select(item =>
        {
            var parts = item.Split(':', 2);
            return new ProductBadge(parts[0], parts[1]);
        }).ToList(),
        Specs = specs.Select(item =>
        {
            var parts = item.Split(':', 2);
            return new ProductSpec(parts[0], parts[1]);
        }).ToList()
    };
}
