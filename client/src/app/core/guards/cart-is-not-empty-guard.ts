import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { of } from 'rxjs';
import { SnackBarService } from '../services/snack-bar.service';

export const cartIsNotEmptyGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService)
  const router = inject(Router)
  const snake = inject(SnackBarService)
  if(cartService.containsItems()){
    return of(true);
  } else {
    router.navigateByUrl('/shop')
    snake.error("Your cart is empty")
    return false;
  }
};
