import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItem {
  product = input.required<Product>();
  like = output<number>();
  delete = output<number>();

  currentImageIndex = 0;

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  isStarFilled(star: number): boolean {
    return star <= Math.round(this.product().rating);
  }

  onLike(): void {
    this.like.emit(this.product().id);
  }

  onDelete(): void {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.delete.emit(this.product().id);
    }
  }

  shareOnWhatsApp(): void {
    const text = `Check out this product: ${this.product().name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.product().link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product().images.length;
  }

  previousImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0
      ? this.product().images.length - 1
      : this.currentImageIndex - 1;
  }

  setImage(index: number): void {
    this.currentImageIndex = index;
  }
}
