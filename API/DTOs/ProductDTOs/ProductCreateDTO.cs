using System.ComponentModel.DataAnnotations;

namespace API.DTOs.ProductDTOs;

public class ProductCreateDTO
{
  [Required]
  public string Name { get; set; } = string.Empty;
  [Required]
  public string Description { get; set; } = string.Empty;
  [Range(1, 5000)]
  public decimal Price { get; set; }
  [Range(0, 100)]
  public int QunatityInStock { get; set; }
  [Required]
  public  string Type { get; set; } = string.Empty;
  [Required]
  public  string Brand { get; set; } = string.Empty;
  [Required]
  public  string PictureUrl { get; set; } = string.Empty;
  
}