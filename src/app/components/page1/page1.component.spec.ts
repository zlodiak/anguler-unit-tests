import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { TodosService } from 'src/app/services/todos.service';
import { Page1Component } from './page1.component';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page1Component],
      imports: [HttpClientModule],
      providers: [TodosService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should display 200 todos', async(() => {
  // fixture.whenStable().then(() => {
  //   fixture.detectChanges();
  //   const compliedComponent = fixture.debugElement.nativeElement;
  //   const todos = compliedComponent.querySelectorAll('.todo-elem');
  //   fixture.detectChanges();
  //   expect(compliedComponent.querySelector('p')).toBeTruthy();
  // });
  // fixture.detectChanges();
  // expect(compliedComponent.querySelector('p')).toBeTruthy();
  // expect(todos.length).toBe(200);
  // }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it("should fetch data asynchronously", async () => {
  //   const todosService = fixture.debugElement.injector.get(TodosService);
  //   let spy = spyOn(todosService, 'getTodos').and.returnValue(
  //     of([])
  //   );
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(component.todos).toBe([]);
  //   });
  // });
});
