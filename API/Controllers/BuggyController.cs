using API.DTOs.ProductDTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
  [HttpGet("internalerror")]
  public IActionResult GetInternalError()
  {
    throw new Exception("Bad Request");
  }

  [HttpGet("unauthorized")]
  public IActionResult GetUnauthorized()
  {
      return Unauthorized();
  }

  [HttpGet("notfound")]
  public IActionResult GetNotFound()
  {
    return NotFound();
  }

    [HttpGet("badrequest")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("This is not a good request");
    }

  [HttpPost("validationerror")]
  public IActionResult TestValidation(ProductCreateDTO dto)
  {
    return Ok();
  }
}