import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaNextComponent } from './media-next.component';

describe('MediaNextComponent', () => {
  let component: MediaNextComponent;
  let fixture: ComponentFixture<MediaNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
