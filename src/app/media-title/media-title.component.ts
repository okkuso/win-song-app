import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-title',
  templateUrl: './media-title.component.html',
  styleUrls: ['./media-title.component.css']
})
export class MediaTitleComponent implements OnInit {

  @Input() public mediaTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
