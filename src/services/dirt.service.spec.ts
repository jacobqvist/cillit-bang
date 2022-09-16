import { TestBed } from '@angular/core/testing';

import { DirtService } from './dirt.service';

describe('DirtService', () => {
  let service: DirtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
