import { TestBed, inject } from '@angular/core/testing';

import { WinSongService } from './win-song.service';

describe('WinSongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinSongService]
    });
  });

  it('should be created', inject([WinSongService], (service: WinSongService) => {
    expect(service).toBeTruthy();
  }));
});
