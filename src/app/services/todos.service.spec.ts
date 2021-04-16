import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TodosService } from './todos.service';
import { HttpClient } from '@angular/common/http';

describe('TodosService', () => {
  let httpTestingController: HttpTestingController;
  let todosService: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodosService],
    });

    todosService = TestBed.inject(TodosService);
    httpTestingController = TestBed.inject(HttpTestingController);
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(TodosService);
    // service = new TodosService(new HttpClient());
  });

  // it('#getValue should return real value', () => {
  //   expect(service.getValue()).toBe('lab');
  // });

  // it('#getObservableValue should return value from observable', (done: DoneFn) => {
  //   service.getTodos().subscribe((value) => {
  //     expect(value).toBe('observable value');
  //     done();
  //   });
  // });
});
