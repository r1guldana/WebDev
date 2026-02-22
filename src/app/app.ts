import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }

  onLike(productId: number): void {
    this.productService.likeProduct(productId);
    // Обновляем список продуктов, чтобы отобразить новое количество лайков
    if (this.selectedCategoryId) {
      this.products = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }

  onDelete(productId: number): void {
    this.productService.deleteProduct(productId);
    // Обновляем список продуктов после удаления
    if (this.selectedCategoryId) {
      this.products = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }
  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }
}
