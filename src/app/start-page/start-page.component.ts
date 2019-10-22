import { Component, OnInit } from '@angular/core';
import { WinSongService } from '../win-song.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private _winSongService: WinSongService) { }

  ngOnInit() {
    this._winSongService.getSongList();
  }

}
