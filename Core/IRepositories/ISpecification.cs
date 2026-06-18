using System.Linq.Expressions;

namespace Core.IRepositories;

public interface ISpecification<T>
{
  Expression<Func<T, bool>>? Criteria { get; }
}