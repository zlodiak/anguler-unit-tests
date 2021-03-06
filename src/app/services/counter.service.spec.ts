import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CounterService],
    });
    service = TestBed.inject(CounterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be equal 0 after init', () => {
    expect(service.getCounter()).toBe(0);
  });

  it(
    'test should wait for CounterService.getObservableValue',
    waitForAsync(() => {
      service
        .getObservableValue()
        .subscribe((value) => expect(value).toBe('observable value'));
    })
  );

  it('test should wait for CounterService.getObservableValue using fakeAsync', fakeAsync(() => {
    service
      .getObservableValue()
      .subscribe((value) => expect(value).toBe('observable value'));
    flush();
  }));

  it('#getObservableValue should return value from observable (use done)', (done: DoneFn) => {
    service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it(
    'test should method of CounterService.getGirls be GET',
    waitForAsync(() => {
      service.getGirls().subscribe((value) => expect(value).toBeTruthy());

      const req = httpTestingController.expectOne(
        'http://localhost:3000/girls'
      );

      expect(req.request.method).toBe('GET');

      const val = [
        {
          id: 0,
          name: 'megan',
        },
        {
          id: 1,
          name: 'foxy',
        },
      ];

      req.flush(val);
    })
  );

  it('test getGirls', () => {
    const val = [
      {
        id: 0,
        name: 'megan',
      },
      {
        id: 1,
        name: 'foxy',
      },
    ];

    service.getGirls().subscribe((girls) => {
      expect(girls).toEqual(val);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/girls');
    expect(req.request.method).toBe('GET');
    req.flush(val);
  });

  it('increment counter', () => {
    expect(service.count).toBe(0);
    service.incrementCount();
    expect(service.count).toBe(1);
  });
});
