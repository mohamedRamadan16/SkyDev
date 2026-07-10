using System.Linq.Expressions;

namespace Core.IRepositories;

public interface ISpecification<T>
{
  Expression<Func<T, bool>>? Criteria { get; }
  Expression<Func<T, object>>? OrderBy { get; }
  Expression<Func<T, object>>? OrderByDesc { get; }
  IQueryable<T> ApplyCriteria(IQueryable<T> query);
  bool IsDistinct { get; }
  bool IsPaginated { get; }
  int Skip { get; }
  int Take { get; }
  string Search { get; }
}

public interface ISpecification<T, TResult> : ISpecification<T>
{
  Expression<Func<T, TResult>>? Select {get;}
}