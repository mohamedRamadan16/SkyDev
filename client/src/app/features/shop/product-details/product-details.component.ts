import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../../core/services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-product-details',
  imports: [
    CurrencyPipe,
    MatButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatDivider
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  protected shopService = inject(ShopService)
  protected activatedRoute = inject(ActivatedRoute)
  protected product?:Product;

  ngOnInit(): void {
    this.loadProduct()
  }
  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(!id) return;
    this.shopService.getProduct(+id).subscribe({
      next: res => this.product = res,
      error: err => console.log(err)
    })
  }
}
