import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../models/products.type';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();

  btn = signal('Add to Cart');

  // showButtonlicked() {
  //   console.log('clicked');
  // }
}
