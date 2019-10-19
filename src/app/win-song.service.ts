import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './songs';

@Injectable({
  providedIn: 'root'
})
export class WinSongService {

  private _url: string = 'assets/data/songs.json';

  constructor( private http: HttpClient ) { }

  getMediaUrl(): Observable<Song[]> {
    return this.http.get<Song[]>(this._url);
  }

  getMediaTitle() {
    return 'This is media title, like "Avicii - Wake Me Up"';
  }
}
