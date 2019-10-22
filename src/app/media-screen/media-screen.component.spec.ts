import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaScreenComponent } from './media-screen.component';

describe('MediaScreenComponent', () => {
  let component: MediaScreenComponent;
  let fixture: ComponentFixture<MediaScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
