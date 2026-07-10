using System.Runtime.Intrinsics.X86;
using API.Controllers.DTOs;
using API.DTOs.ProductDTOs;
using API.RequestHelpers;
using Core.Entities;
using Core.IRepositories;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
public class ProductsController(IGenericRepository<Product> _productRepo) : BaseApiController
{

  // Using ActionResult Instead of IActionResult in some methods is related to Readability as we now knows what the methods returns & also It's better approach with swagger & OpenAPI
  [HttpGet]
  public async Task<ActionResult<IReadOnlyList<Product>>> GetAll([FromQuery] ProductSpecParams specParams)
  {
    var spec = new ProductSpecification(specParams);
    return await GetPaginatedProducts(_productRepo, spec, specParams.pageNumber, specParams.pageSize);
  }

  [HttpGet("{brands}")]
  public async Task<ActionResult<IReadOnlyList<string>>> GetAllBrands()
  {
    var spec = new BrandListSepcification();
    var brands = await _productRepo.ListAsync(spec);
    return Ok(brands);
  }

  [HttpGet]
  [Route("types")]
  public async Task<ActionResult<IReadOnlyList<string>>> GetAllTypes()
  {
    var spec = new TypeListSepcification();
    var types = await _productRepo.ListAsync(spec);
    return Ok(types);
  }
  
  [HttpGet("{id:int}")]
  public async Task<ActionResult<Product>> GetById(int id)
  {
    if(id <= 0) return BadRequest("Product Id Shouldn't Be Less Than Or Equal 0");

    Product? product = await _productRepo.GetByIdAsync(id);
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

    await _productRepo.AddAsync(ProductToDb);
    return CreatedAtAction(nameof(GetById), new { id = ProductToDb.Id }, ProductToDb);
  }

  [HttpPut("{id:int}")]
  public async Task<IActionResult> Update([FromRoute]int id, [FromBody] UpdateProductDTO updateProductDTO)
  {
    if(id <= 0) return BadRequest("Product Id Shouldn't Be Less Than Or Equal 0");
    if(updateProductDTO is null) return BadRequest("Enter a correct values !!! ");

    Product? productFromDb = await _productRepo.GetByIdAsync(id);
    if(productFromDb is null) return NotFound();
    
    productFromDb.Name = updateProductDTO.Name;
    productFromDb.Description = updateProductDTO.Description;
    productFromDb.Brand = updateProductDTO.Brand;
    productFromDb.PictureUrl = updateProductDTO.PictureUrl;
    productFromDb.Price = updateProductDTO.Price;
    productFromDb.QunatityInStock = updateProductDTO.QunatityInStock;
    productFromDb.Type = updateProductDTO.Type;

    //_context.Products.Update(productFromDb); // unnecssary as it's already tracked by EF
    await _productRepo.UpdateAsync(productFromDb);
    return NoContent();
  }

  [HttpDelete("{id:int}")]
  public async Task<IActionResult> Delete([FromRoute] int id)
  {
    if(id <= 0) return BadRequest("Product Id Shouldn't Be Less Than Or Equal 0");
    Product? product = await _productRepo.GetByIdAsync(id);
    if(product is null) return NotFound();
    
    await _productRepo.RemoveAsync(product);
    return NoContent();
  }
}