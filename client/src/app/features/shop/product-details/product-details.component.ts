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
import { CartService } from '../../../core/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [
    CurrencyPipe,
    MatButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatDivider,
    FormsModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  protected shopService = inject(ShopService)
  protected activatedRoute = inject(ActivatedRoute)
  protected cartService = inject(CartService)
  protected product?:Product;

  quantityInCart = 0
  quantity = 1

  ngOnInit(): void {
    this.loadProduct()
  }
  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(!id) return;
    this.shopService.getProduct(+id).subscribe({
      next: res => {
        this.product = res
        this.updateQuantityInCart();
      },
      error: err => console.log(err)
    })
  }

  updateQuantityInCart() {
    this.quantityInCart = this.cartService.cart()?.items.find(x => x.productId === this.product?.id)?.quantity || 0
    this.quantity = this.quantityInCart || 1
  }

  getButtonText(){
    return this.quantityInCart > 0 ? "Update cart" : "Add to cart"
  }

  updateCart(){
    if(!this.product) return;
    if(this.quantity > this.quantityInCart){
      const itemsToAdd = this.quantity - this.quantityInCart
      this.quantityInCart += itemsToAdd
      this.cartService.addItemToCart(this.product, itemsToAdd)
    } else{
      const itemsToRemove = this.quantityInCart - this.quantity
      this.quantityInCart -= itemsToRemove
      this.cartService.removeItemFromCart(this.product.id, itemsToRemove)
    }
  }
}
