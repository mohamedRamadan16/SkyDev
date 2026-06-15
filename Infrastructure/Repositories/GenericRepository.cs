using Core.Entities;
using Core.IRepositories;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class GenericRepository<T>(StoreContext _context) : IGenericRepository<T> where T : BaseEntity
{
  public async Task<IReadOnlyList<T>> GetAllAsync()
  {
    return await _context.Set<T>().ToListAsync();
  }

  public async Task<T?> GetByIdAsync(int id)
  {
    return await _context.Set<T>().FirstOrDefaultAsync(t => t.Id == id);
  }  
  public async Task AddAsync(T entity)
  {
    await _context.Set<T>().AddAsync(entity);
    await this.SaveChangesAsync();
  }

  public async Task RemoveAsync(T entity)
  {
    _context.Set<T>().Remove(entity);
    await this.SaveChangesAsync();
  }

  public async Task UpdateAsync(T entity)
  {
    _context.Set<T>().Update(entity);
    await this.SaveChangesAsync();
  }
  public async Task<bool> SaveChangesAsync()
  {
    return await _context.SaveChangesAsync() > 0;
  }

  public async Task<bool> Exists(int id)
  {
    T? entity = await _context.Set<T>().FirstOrDefaultAsync(e => e.Id == id);
    return entity is not null;
  }
}