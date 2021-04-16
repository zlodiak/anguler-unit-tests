import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CounterService],
    });
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be equal 0 after init', () => {
    expect(service.getCounter()).toBe(0);
  });

  // it('test should wait for CounterService.getGirls', fakeAsync(() => {
  //   service.getGirls().subscribe((value) => expect(value).toBeTruthy());
  // }));

  // it('test should wait for CounterService.getGirls', (done: DoneFn) => {
  //   service.getGirls().subscribe((value) => {
  //     expect(value).toBeTruthy();
  //     done();
  //   });
  // });

  it(
    'test should wait for CounterService.getObservableValue',
    waitForAsync(() => {
      service
        .getObservableValue()
        .subscribe((value) => expect(value).toBe('observable value'));
    })
  );

  it(
    'test should wait for CounterService.getGirls',
    waitForAsync(() => {
      service
        .getGirls()
        .subscribe((value) => expect(value).toBe('observable value'));
    })
  );
});
