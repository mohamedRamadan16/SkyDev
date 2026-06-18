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
  protected BaseSepcification() : this(null)
  {
    
  }
  public Expression<Func<T, bool>>? Criteria => _criteria; // To hande Where
  public Expression<Func<T, object>>? OrderBy { get; private set; }
  public Expression<Func<T, object>>? OrderByDesc { get; private set; }

  public void AddOrderBy(Expression<Func<T, object>> orderBy)
  {
    OrderBy = orderBy;
  }

    public void AddOrderByDesc(Expression<Func<T, object>> orderByDesc)
  {
    OrderByDesc = orderByDesc;
  }
}