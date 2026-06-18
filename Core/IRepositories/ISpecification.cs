using System.Linq.Expressions;

namespace Core.IRepositories;

public interface ISpecification<T>
{
  Expression<Func<T, bool>>? Criteria { get; }
  Expression<Func<T, object>>? OrderBy { get; }
  Expression<Func<T, object>>? OrderByDesc { get; }

}