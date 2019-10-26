import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class WinSongService {

  public songList: Song[];
  // private _apiUrl = 'assets/data/songs.json';
  private _apiUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=q3O2RHPr2Rp2KJs_Rt5XGzMAa3SN6pyFuUk9vzHakWjIx-0yM9YSm-bkBZMpcfkOimxIAk6aA_tjXDtUn_BmmBkbvbOI5f3Qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG71DOnfX-4cAtO92GdmSy6MZkxlt2sezGfXx6IqfB8bDEvzQ-qeQRxOkc_-mcFYNo1iM4RU-a3A&lib=M2cIc5_cnOUNLKsLD7MsKPUu1Q3-G6ApM';

  constructor( private http: HttpClient ) { }

  /**
   * Get song list from API
   *
   */
  getSongList(): void {
    this.http.get<Song[]>(this._apiUrl).subscribe(
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
