using Core.Entities;

namespace Core.IRepositories;

public interface IGenericRepository<T> where T : BaseEntity
{
  Task<IReadOnlyList<T>> GetAllAsync();
  Task<T?> GetByIdAsync(int id);
  Task AddAsync(T entity);
  Task UpdateAsync(T entity);
  Task RemoveAsync(T entity);
  Task<bool> SaveChangesAsync();
  Task<bool> Exists(int id);
}