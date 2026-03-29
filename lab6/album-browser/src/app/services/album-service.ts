import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Album } from '../album';
import { Photo } from '../photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  private albumsSubject = new BehaviorSubject<Album[] | null>(null);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) {

    this.loadAlbums();
  }


  loadAlbums(): void {
    this.http.get<Album[]>(`${this.apiUrl}/albums`).subscribe({
      next: (albums) => {
        this.albumsSubject.next(albums);
      },
      error: (err) => console.error('Error loading albums:', err)
    });
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }

  createAlbum(albumData: { userId: number; title: string }): Observable<Album> {
    return this.http.post<Album>(`${this.apiUrl}/albums`, albumData).pipe(
      tap((createdAlbum) => {
        console.log('Album created in service:', createdAlbum);
        const current = this.albumsSubject.value || [];

        this.albumsSubject.next([createdAlbum, ...current]);
        console.log('New albums state:', this.albumsSubject.value);
      })
    );

  }
}
