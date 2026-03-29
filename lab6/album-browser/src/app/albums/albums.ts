import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album-service';
import { Album } from '../album';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums$: Observable<Album[] | null>;
  loading = true;

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.albums$;
  }

  ngOnInit(): void {
    console.log('Loading albums...');

    this.albumService.loadAlbums();

    this.albums$.subscribe((albums) => {
      console.log('Albums updated:', albums);
      if (albums) {
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe({
      error: (err) => console.error('Error deleting album:', err)
    });
  }
}
