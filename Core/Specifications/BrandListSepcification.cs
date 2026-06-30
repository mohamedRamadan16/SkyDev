using Core.Entities;

namespace Core.Specifications;

public class BrandListSepcification : BaseSepcification<Product, string>
{
  public BrandListSepcification()
  {
    AddSelect(p => p.Brand);
    AddDistinct();
  }
}