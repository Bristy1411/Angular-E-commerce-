import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../models/products.type';
import { LightButtonComponent } from '../light-button/light-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [LightButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cardItem = input.required<Product>();
  cartService = inject(CartService);
  btn = signal('Remove');
}
