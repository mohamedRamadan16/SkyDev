namespace Core.Entities;

public class Product : BaseEntity
{
  public required string Name { get; set; }
  public required string Description { get; set; }
  public required decimal Price { get; set; }
  public int QunatityInStock { get; set; }
  public required string Type { get; set; }
  public required string Brand { get; set; } = null!;
  public required string PictureUrl { get; set; } = null!;
}