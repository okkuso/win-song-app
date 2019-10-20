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
  public unsafeUrl: string;

  constructor(
    private _winSongService: WinSongService,
    private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this._winSongService.getMediaUrl().subscribe(data =>
      this.mediaUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(data[0].youtube_param));
  }

}
