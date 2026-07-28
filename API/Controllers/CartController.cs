using Core.Entities;
using Core.IRepositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CartController(ICartService cartService) : BaseApiController
{
  [HttpGet]
  public async Task<ActionResult<ShoppingCart>> GetCartById(string id)
  {
    var cart = await cartService.GetCartAsync(id);
    return Ok(cart ?? new ShoppingCart(){Id = id});
  }

  [HttpPost]
  public async Task<ActionResult<ShoppingCart>> SetCart(ShoppingCart cart)
  {
    var updated = await cartService.SetCartAsync(cart);
    if(updated == null) return BadRequest("Problem with cart");
    return cart;
  }

  [HttpDelete]
  public async Task<ActionResult> DeleteCart(string id)
  {
    var res = await cartService.DeleteCartAsync(id);
    if(!res) return BadRequest("Problem deleting cart");
    return Ok();
  }
}