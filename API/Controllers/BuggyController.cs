using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
  [HttpGet("internalerror")]
  public IActionResult GetInternalError()
  {
    throw new Exception("Bad Request");
  }
}