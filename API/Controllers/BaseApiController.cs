using API.RequestHelpers;
using Core.Entities;
using Core.IRepositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BaseApiController : ControllerBase
{
  public async Task<ActionResult> GetPaginatedProducts<T>(IGenericRepository<T> repo, ISpecification<T> spec, int pageNumber, int pageSize) where T : BaseEntity
  {
    var items = await repo.ListAsync(spec);
    var count = await repo.CountAsync(spec);
    var pagination = new Pangination<T>(pageNumber, pageSize, count, items);
    return Ok(pagination);
  }
}