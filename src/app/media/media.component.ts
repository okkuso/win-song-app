import { Component, OnInit } from '@angular/core';
import { WinSongService } from '../win-song.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  public mediaUrl: SafeResourceUrl;
  public mediaTitle: string;

  private songData: JSON;
  private minId: number;
  private maxId: number;

  constructor(
    private _winSongService: WinSongService,
    private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this._winSongService.getMediaUrl().subscribe(data => this.songData);
    // this._winSongService.getMediaUrl().subscribe(data => this.setMediaInfo(data));
  }

  private setMediaInfo(data: any) {
    this.mediaUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(data[0].youtube_url);
    this.mediaTitle = data[0].title;
  }

  private getRandomId(min: number, max: number) {
    const randomId: number = Math.floor( Math.random() * (max + 1 - min) ) + min;

    return randomId;
  }

  private getNextSong() {
    this.getRandomId(this.minId, this.maxId);

  }

}
