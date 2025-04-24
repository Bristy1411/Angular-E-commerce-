import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
})
export class CartListComponent {
  cartService = inject(CartService);
}
