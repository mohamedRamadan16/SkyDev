import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/pagination';
import { Product } from '../../shared/models/product';
import { ShopParams } from '../../shared/models/shopParams';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private http = inject(HttpClient);
  private baseUrl = "https://localhost:5001/api/"
  brands: string[] = []
  types: string[] = []

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    params = params.append('pageSize', shopParams.pageSize)
    params = params.append('pageNumber', shopParams.pageNumber)

    if(shopParams.brands && shopParams.brands.length > 0){
      params = params.append('brands', shopParams.brands.join(','))
    }

    if(shopParams.types && shopParams.types.length > 0){
      params = params.append('types', shopParams?.types.join(','))
    }

    if(shopParams.sort){
      params = params.append('sort', shopParams?.sort)
    }

    if(shopParams.search){
      params = params.append('search', shopParams.search)
    }

    return this.http.get<Pagination<Product>>(this.baseUrl + 'products', {params})
  }

  getProduct(id: number){
    return this.http.get<Product>(this.baseUrl + 'products/' + id)
  }

  getBrands(){
    this.http.get<string[]>(this.baseUrl + 'products/brands').subscribe({
      next: response => this.brands = response,
      error: err => console.log(err)
    })
  }

  getTypes(){
    this.http.get<string[]>(this.baseUrl + 'products/types').subscribe({
      next: response => this.types = response,
      error: err => console.log(err)
    })
  }
}
