using System.Reflection;
using System.Text.Json;
using System.Text.Json.Nodes;
using Core.Entities;

namespace Infrastructure.Data;

public class StoreContextSeed
{
  public static async Task SeedAsync(StoreContext context)
  {
    var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

    if (!context.Products.Any())
    {
      var productsData = await File.ReadAllTextAsync(path + @"/Data/SeedData/products.json");
      //var productsData = await File.ReadAllTextAsync("../Infrastructure/Data/SeedData/products.json");
      var products = JsonSerializer.Deserialize<List<Product>>(productsData);
      if(products != null)
      {
        await context.Products.AddRangeAsync(products);
        await context.SaveChangesAsync();
      }
    }
  }
}