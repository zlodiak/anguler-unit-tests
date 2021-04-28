import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TodosService } from 'src/app/services/todos.service';
import { Page1Component } from './page1.component';
import { of } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
import { By } from '@angular/platform-browser';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;
  let spy: any;
  let todosService: TodosService;
  let counterService: CounterService;
  let debugElement;

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
    debugElement = fixture.debugElement;
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

  it('should fill todos from http', () => {
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

  it('should display todos from without http', () => {
    const data = [
      {
        completed: false,
        id: 1,
        title: 'title1',
        userId: 1,
      },
    ];
    component.todos = data;
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;
    const todoElem = compliedComponent.querySelector('.todo-elem');
    expect(todoElem.innerHTML).toContain(data[0].title);
  });

  it('should display todos from with http', () => {
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

    const todoElem = fixture.debugElement.query(By.css('.todo-elem'));
    expect('1 - title1').toContain(data[0].title);
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

  it('elem should contain phrase exactly', () => {
    const compliedComponent: HTMLElement = fixture.nativeElement;
    const phraseElem = compliedComponent.querySelector('.phrase');
    expect(phraseElem.textContent).toEqual('qwerty');
    expect(phraseElem.textContent).not.toEqual('asdffgh');
  });

  it('value must bind to template after changeDetection', () => {
    const compliedComponent: HTMLElement = fixture.nativeElement;
    const remark2Elem = compliedComponent.querySelector('.remark2');
    expect(remark2Elem.textContent).toContain(component.remark2);
  });
});
