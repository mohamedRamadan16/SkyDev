using Core.Entities;
using Core.IRepositories;

namespace Infrastructure.Data;

public static class SpecificationEvaluator<T> where T : BaseEntity
{
  public static IQueryable<T> GetQuery(IQueryable<T> query, ISpecification<T> spec)
  {
    if(spec.Criteria != null)
    {
      query = query.Where(spec.Criteria);
    }
    return query;
  }
}