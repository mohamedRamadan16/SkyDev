using Core.Constants;
using Core.Entities;

namespace Core.IRepositories;

public interface IProductRepository
{
  Task<IEnumerable<Product>> GetAll(string? brand, string? type, string? sort, int pageSize = 10, int pageNumber = 1);
  Task<(IEnumerable<Product>, int)> GetAllMatching(string? searchQuery, string? sortBy,int pageSize = 10, int pageNumber = 1, SortOption sortOption = SortOption.Ascending);
  Task<IReadOnlyList<string>> GetBrandsAsync();
  Task<IReadOnlyList<string>> GetTypesAsync();
  Task<Product?> GetById(int id);
  Task CreateAsync(Product product);
  Task Update(Product product);
  Task Delete(Product product);
  Task SaveChangesAsync();
}