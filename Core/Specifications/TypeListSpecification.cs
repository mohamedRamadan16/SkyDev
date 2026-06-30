using Core.Entities;

namespace Core.Specifications;

public class TypeListSepcification : BaseSepcification<Product, string>
{
  public TypeListSepcification()
  {
    AddSelect(p => p.Type);
    AddDistinct();
  }
}