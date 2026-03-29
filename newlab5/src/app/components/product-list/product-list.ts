import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})


export class ProductList {
  products = input.required<Product[]>();
  like = output<number>();
  delete = output<number>();
  favorites: Product[] = [];
  favorite = output<number>();

  onLike(productId: number): void {
    this.like.emit(productId);
  }

  onDelete(productId: number): void {
    this.delete.emit(productId);
  }
  toggleFavorite(productId: number): void {
    const product = this.products().find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = !product.isFavorite;
    this.favorites = this.products().filter(p => p.isFavorite);
    this.favorite.emit(productId);
  }

}
