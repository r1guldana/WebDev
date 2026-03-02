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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Loading album ID:', id);

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        console.log('Album loaded:', data);
        this.album = data;
        this.cdr.detectChanges();
        console.log('Album set, loading should disappear');
      },
      error: (err) => {
        console.error('Error:', err);
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
