import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTitleComponent } from './media-title.component';

describe('MediaTitleComponent', () => {
  let component: MediaTitleComponent;
  let fixture: ComponentFixture<MediaTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
