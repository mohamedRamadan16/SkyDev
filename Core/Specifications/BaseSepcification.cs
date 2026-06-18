using System.Linq.Expressions;
using Core.IRepositories;

namespace Core.Specifications;

public class BaseSepcification<T> : ISpecification<T>
{
  private readonly Expression<Func<T, bool>>? _criteria;
  public BaseSepcification(Expression<Func<T, bool>>? _criteria)
  {
    this._criteria = _criteria;
  }
  public Expression<Func<T, bool>>? Criteria => _criteria; // To hande Where
}