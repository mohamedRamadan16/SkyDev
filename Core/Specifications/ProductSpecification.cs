using Core.Entities;

namespace Core.Specifications;

public class ProductSpecification : BaseSepcification<Product>
{
  public ProductSpecification(string? brand, string? type, string? sortBy) : base(b => 
    (string.IsNullOrEmpty(brand) || b.Brand == brand) &&
    (string.IsNullOrWhiteSpace(type) || b.Type == type)
  )
  {
    switch (sortBy)
    {
      case "priceAsc":
        AddOrderBy(p => p.Price);
        break;
      case "priceDesc":
        AddOrderByDesc(p => p.Price);
        break;
      default:
        AddOrderBy(p => p.Name);
        break;
    }
  }
}
