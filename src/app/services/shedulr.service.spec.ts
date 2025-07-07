import { TestBed } from '@angular/core/testing';

import { ShedulrService } from './shedulr.service';

describe('ShedulrService', () => {
  let service: ShedulrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShedulrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
