import { Component, OnInit } from '@angular/core';
import { WinSongService } from '../win-song.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Song } from '../song';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  public mediaUrl: SafeResourceUrl;
  public mediaTitle: string;

  private nextSongData: Song;

  constructor(
    private _winSongService: WinSongService,
    private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.setNextSong();
  }

  public setNextSong() {
    this.nextSongData = this._winSongService.getNextSong();

    this.mediaUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(this.nextSongData.youtube_url);
    this.mediaTitle = this.nextSongData.title;
  }
}
