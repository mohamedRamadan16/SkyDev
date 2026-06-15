using Core.Constants;
using Core.Entities;

namespace Core.IRepositories;

public interface IProductRepository
{
  Task<IEnumerable<Product>> GetAll(int pageSize = 10, int pageNumber = 1);
  Task<(IEnumerable<Product>, int)> GetAllMatching(string? searchQuery, string? sortBy,int pageSize = 10, int pageNumber = 1, SortOption sortOption = SortOption.Ascending);
  Task<Product?> GetById(int id);
  Task CreateAsync(Product product);
  Task Update(Product product);
  Task Delete(Product product);
  Task SaveChangesAsync();
}