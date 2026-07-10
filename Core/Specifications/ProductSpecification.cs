using Core.Entities;

namespace Core.Specifications;

public class ProductSpecification : BaseSepcification<Product>
{
  
  public ProductSpecification(ProductSpecParams specParams) : base(b => 
      (string.IsNullOrWhiteSpace(specParams.Search) || b.Name.ToLower().Contains(specParams.Search)) &&
      (specParams.Brands.Count == 0 || specParams.Brands.Contains(b.Brand)) &&
      (specParams.Types.Count == 0 || specParams.Types.Contains(b.Type)))
  {
    switch (specParams.Sort)
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

    if(specParams.pageNumber != 0)
      AddPagination(specParams.pageSize * (specParams.pageNumber - 1), specParams.pageSize);
  }
}
