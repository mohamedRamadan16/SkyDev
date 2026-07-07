namespace Core.Specifications;

public class ProductSpecParams
{
  private List<string> _types = [];
  private List<string> _brands = [];
  public List<string> Types
  {
    get => _types;
    set => value.SelectMany(x => x.Split(',', StringSplitOptions.RemoveEmptyEntries)).ToList();
  }
  public List<string> Brands
  {
    get => _brands;
    set => value.SelectMany(x => x.Split(',', StringSplitOptions.RemoveEmptyEntries)).ToList();
  }

  public string? Sort { get; set; }
}