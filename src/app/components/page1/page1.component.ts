import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  todos: any;
  title: string = 'component1';
  remark: string = 'initial';
  remark2: string = 'initial2';
  random: any;

  constructor(
    private todosService: TodosService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
    this.remark = 'setted';
    this.random = this.counterService.getRandom();
  }
}
