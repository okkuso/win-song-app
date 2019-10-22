import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class WinSongService {

  public songList: Song[];
  private _url = 'assets/data/songs.json';

  constructor( private http: HttpClient ) { }

  /**
   * Get song list from API
   *
   */
  getSongList(): void {
    this.http.get<Song[]>(this._url).subscribe(
      data => {
        this.songList = data;
      },
      err => {
        console.error('Observer got an error: ' + err);
      },
      () => {
        console.log('Observer got a complete notification');
      }
    );
  }

  getNextSong(): Song {
    // Get random id
    const randomId = this.getRandomId(0, Object.keys(this.songList).length);

    return this.songList[randomId];
  }

  private getRandomId(min: number, max: number) {
    const randomId: number = Math.floor( Math.random() * (max - min) ) + min;

    return randomId;
  }
}
