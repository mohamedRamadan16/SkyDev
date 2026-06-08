using API.Controllers.DTOs;
using API.DTOs.ProductDTOs;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
  StoreContext _context;
  public ProductController(StoreContext context)
  {
    this._context = context;
  }

  // Using ActionResult Instead of IActionResult in some methods is related to Readability as we now knows what the methods returns & also It's better approach with swagger & OpenAPI
  [HttpGet]
  public async Task<ActionResult<IEnumerable<Product>>> GetAll()
  {
    List<Product> products = await _context.Products.ToListAsync();
    return Ok(products);
  }
  
  [HttpGet("{id:int}")]
  public async Task<ActionResult<Product>> GetById(int id)
  {
    if(id <= 0) return BadRequest("Product Id Shouldn't Be Less Than Or Equal 0");

    Product? product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
    if(product is null) return NotFound();
    return Ok(product);
  }

  [HttpPost]
  public async Task<IActionResult> Create([FromBody] ProductCreateDTO product)
  {
    if(!ModelState.IsValid) return BadRequest("Enter a correct values !!!");

    // Mapping
    Product ProductToDb = new Product()
    {
      Name = product.Name,
      Brand = product.Brand,
      PictureUrl = product.PictureUrl,
      Description = product.Description,
      Price = product.Price,
      QunatityInStock = product.QunatityInStock,
      Type = product.Type
    };
    await _context.Products.AddAsync(ProductToDb);
    await _context.SaveChangesAsync();
    
    return CreatedAtAction(nameof(GetById), new { id = ProductToDb.Id }, ProductToDb);
  }

  [HttpPut("{id:int}")]
  public async Task<IActionResult> Update([FromRoute]int id, [FromBody] UpdateProductDTO updateProductDTO)
  {
    if(id <= 0) return BadRequest("Product Id Shouldn't Be Less Than Or Equal 0");
    if(updateProductDTO is null) return BadRequest("Enter a correct values !!! ");

    Product? productFromDb = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
    if(productFromDb is null) return NotFound();
    
    productFromDb.Name = updateProductDTO.Name;
    productFromDb.Description = updateProductDTO.Description;
    productFromDb.Brand = updateProductDTO.Brand;
    productFromDb.PictureUrl = updateProductDTO.PictureUrl;
    productFromDb.Price = updateProductDTO.Price;
    productFromDb.QunatityInStock = updateProductDTO.QunatityInStock;
    productFromDb.Type = updateProductDTO.Type;

    //_context.Products.Update(productFromDb); // unnecssary as it's already tracked by EF
    await _context.SaveChangesAsync();
    return NoContent();
  }

  [HttpDelete("{id:int}")]
  public async Task<IActionResult> Delete([FromRoute] int id)
  {
    if(id <= 0) return BadRequest("Product Id Shouldn't Be Less Than Or Equal 0");
    Product? product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
    if(product is null) return NotFound();
    
    _context.Products.Remove(product);
    await _context.SaveChangesAsync();
    return NoContent();
  }
}