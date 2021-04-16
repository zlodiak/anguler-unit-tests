import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CounterService] });
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be equal 0 after init', () => {
    expect(service.getCounter()).toBe(0);
  });
});
