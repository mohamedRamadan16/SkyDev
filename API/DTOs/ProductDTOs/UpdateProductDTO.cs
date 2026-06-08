using System.ComponentModel.DataAnnotations;

namespace API.Controllers.DTOs;

public class UpdateProductDTO
{
  public required string Name { get; set; }
  public required string Description { get; set; }
  [Range(0, 5000)]
  public required decimal Price { get; set; }
  [Range(0, 100)]
  public int QunatityInStock { get; set; }
  public required string Type { get; set; }
  public required string Brand { get; set; } = null!;
  public required string PictureUrl { get; set; } = null!;
  
}