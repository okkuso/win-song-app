import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-screen',
  templateUrl: './media-screen.component.html',
  styleUrls: ['./media-screen.component.css']
})
export class MediaScreenComponent implements OnInit {

  @Input() public mediaUrl: SafeResourceUrl;

  constructor() { }

  ngOnInit() {
  }

}
