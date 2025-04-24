import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/products.type';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      title: 'Fjallraven-Foldsack No.1 Backpack',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      id: 1,
      price: 109.59,
      stock: 10,
    },
    {
      title: 'Mens Casual T-Shirt',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      id: 2,
      price: 22.59,
      stock: 0,
    },

    {
      title: 'Mens Cotton Jacket',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      id: 3,
      price: 55.59,
      stock: 5,
    },
    {
      title: 'Mens Casual Slim Fit',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      id: 4,
      price: 80.59,
      stock: 3,
    },
  ]);
}
