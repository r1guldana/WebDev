import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album-service';
import { Album } from '../album';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID param:', idParam); // для отладки

    if (!idParam) {
      console.error('No ID provided');
      this.router.navigate(['/albums']);
      return;
    }

    const id = Number(idParam);
    console.log('Loading album ID:', id);

    if (isNaN(id)) {
      console.error('Invalid ID:', idParam);
      this.router.navigate(['/albums']);
      return;
    }

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        console.log('Album loaded:', data);
        this.album = data;
      },
      error: (err) => {
        console.error('Error loading album:', err);
        this.router.navigate(['/albums']);
      }
    });
  }

  save() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe({
        next: () => {
          alert('Saved!');
          this.cdr.detectChanges();
        },
        error: (err) => console.error('Error saving:', err)
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
