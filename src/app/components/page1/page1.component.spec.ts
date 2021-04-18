import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TodosService } from 'src/app/services/todos.service';
import { Page1Component } from './page1.component';
import { of } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;
  let spy: any;
  let todosService: TodosService;
  let counterService: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Component],
      imports: [HttpClientModule],
      providers: [TodosService, CounterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todosService = TestBed.inject(TodosService);
    counterService = TestBed.inject(CounterService);
  });

  it(`title equals 'component1'`, () => {
    expect(component.title).toEqual('component1');
  });

  it(`remark equals 'setted'`, () => {
    expect(component.remark).toEqual('setted');
  });

  it('should fill todos', () => {
    const data = [
      {
        completed: false,
        id: 1,
        title: 'title1',
        userId: 1,
      },
    ];
    const todosObs = of(data);

    spy = spyOn(todosService, 'getTodos').and.returnValue(todosObs);
    component.ngOnInit();
    expect(component.todos).toEqual(data);
  });

  it('should fill random', () => {
    const random = {
      value: 123456,
      date: 123456,
    };
    spy = spyOn(counterService, 'getRandom').and.returnValue(random);
    component.ngOnInit();
    expect(component.random).toEqual(random);
  });
});
