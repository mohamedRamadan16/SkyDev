using System.Linq.Expressions;
using Core.Constants;
using Core.Entities;
using Core.IRepositories;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class ProductRepository : IProductRepository
{
  StoreContext _context;

  public ProductRepository(StoreContext context)
  {
    this._context = context;
  }

  public async Task<IEnumerable<Product>> GetAll(string? brand, string? type, int pageSize = 10, int pageNumber = 1)
  {
    if(pageNumber <= 0 || pageSize <= 0) return [];
    
    var query = _context.Products.AsQueryable();
    if(!string.IsNullOrWhiteSpace(brand))
      query = query.Where(p => p.Brand == brand);

    if(!string.IsNullOrWhiteSpace(type))
      query = query.Where(p => p.Type == type);

    var products = await query.Skip(pageSize * (pageNumber - 1))
                                    .Take(pageSize)
                                    .ToListAsync();
    return products;
  }

  public async Task<(IEnumerable<Product>, int)> GetAllMatching(string? searchQuery,
      string? sortBy,int pageSize = 10,
      int pageNumber = 1,
      SortOption sortOption = SortOption.Ascending)
  {
    if(pageNumber <= 0 || pageSize <= 0) return ([], 0);
    IQueryable<Product>? query;
    if (string.IsNullOrEmpty(searchQuery))
    {
      query = _context.Products;
    }
    else
    {
      string searchQueryLower = searchQuery.ToLower();
      query = _context.Products.Where(p => p.Name.ToLower().Contains(searchQueryLower) || p.Description.ToLower().Contains(searchQueryLower) || p.Brand.ToLower().Contains(searchQueryLower));
    }
    int totalCount = query.Count();

    if (!string.IsNullOrEmpty(sortBy))
    {
      Dictionary<string, Expression<Func<Product, object>>> columnSelector = new Dictionary<string, Expression<Func<Product, object>>>()
      {
        {nameof(Product.Name), p => p.Name},
        {nameof(Product.Brand), p => p.Brand},
        {nameof(Product.Type), p => p.Type}
      };
      var selector = columnSelector[sortBy];
      query = (sortOption == SortOption.Ascending) ? query.OrderBy(selector) : query.OrderByDescending(selector);
    }

    // Pagination
    var res = await query.Skip(pageSize * (pageNumber - 1))
                .Take(pageSize)
                .ToListAsync();

    return (res, totalCount);
  }


  public async Task<IReadOnlyList<string>> GetBrandsAsync()
  {
    var result =  await _context.Products.Select(p => p.Brand).Distinct().ToListAsync();
    return result;
  }

  public async Task<IReadOnlyList<string>> GetTypesAsync()
  {
    var result =  await _context.Products.Select(p => p.Type).Distinct().ToListAsync();
    return result;
  }

  public async Task<Product?> GetById(int id)
  {
    Product? product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
    return product;
  }

  public async Task CreateAsync(Product product)
  {
    await _context.Products.AddAsync(product);
    await SaveChangesAsync();
  }

  public async Task Delete(Product product)
  {
    _context.Products.Remove(product);
    await SaveChangesAsync();
  }

  public async Task Update(Product product)
  {
    _context.Products.Update(product);
    await SaveChangesAsync();
  }

  public async Task SaveChangesAsync()
  {
    await _context.SaveChangesAsync();
  }
}