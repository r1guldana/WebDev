import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album-service';

@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-create.html',
  styleUrl: './album-create.css',
})
export class AlbumCreate {
  album = {
    userId: 1,
    title: ''
  };

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  create() {
    if (this.album.userId < 1 || this.album.userId > 10 || !this.album.title || this.album.title.length < 3) {
      alert('Please check your input: userId (1-10) and title (min 3 characters)');
      return;
    }

    this.albumService.createAlbum(this.album).subscribe({
      next: () => {

        this.router.navigate(['/albums']);
        },
      error: () => {
        alert('Error creating album');
      }
    });
  }

  cancel() {
    this.router.navigate(['/albums']);
  }
}
