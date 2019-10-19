import { Component, OnInit } from '@angular/core';
import { WinSongService } from '../win-song.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  public mediaUrl: string;

  constructor( private _winSongService: WinSongService) { }

  ngOnInit() {
    this._winSongService.getMediaUrl().subscribe(data => this.mediaUrl = data[0].title);
  }

}
