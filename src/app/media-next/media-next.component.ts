import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-media-next',
  templateUrl: './media-next.component.html',
  styleUrls: ['./media-next.component.css']
})
export class MediaNextComponent implements OnInit {

  @Output() public nextEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fireEvent() {
    this.nextEvent.emit('');
  }
}
