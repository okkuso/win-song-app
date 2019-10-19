import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WinSongService {

  private _url: string = 'assets/data/songs.json';

  constructor( private http: HttpClient ) { }

  getMediaUrl() {
    return this.http.get(this._url);
  }

  getMediaTitle() {
    return 'This is media title, like "Avicii - Wake Me Up"';
  }
}
