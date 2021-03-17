import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  todos: any;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
