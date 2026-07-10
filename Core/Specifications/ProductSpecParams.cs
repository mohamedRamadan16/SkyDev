namespace Core.Specifications;

public class ProductSpecParams
{
  private List<string> _types = [];
  private List<string> _brands = [];
  public List<string> Types
  {
    get => _types;
    set 
    {
      _types = value.SelectMany(x => x.Split(',', StringSplitOptions.RemoveEmptyEntries)).ToList();
    }
  }
  public List<string> Brands
  {
    get => _brands;
    set 
    {
      _brands = value.SelectMany(x => x.Split(',', StringSplitOptions.RemoveEmptyEntries)).ToList();
    }
  }
  public string? Sort { get; set; }
  public string? Search { get; set; }
  private int maxPageSize = 50;
  private int _pageSize = 6;
  public int pageNumber { get; set; } = 1;
  public int pageSize
  {
    get => _pageSize;
    set
    {
      _pageSize = value > maxPageSize ? maxPageSize : value;
    }
  }
}