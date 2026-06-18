using Core.Entities;

namespace Core.Specifications;

public class ProductSpecification : BaseSepcification<Product>
{
  public ProductSpecification(string? brand, string? type) : base(b => 
    (string.IsNullOrEmpty(brand) || b.Brand == brand) &&
    (string.IsNullOrWhiteSpace(type) || b.Type == type)
  )
  {
    
  }
}