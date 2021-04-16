import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  label = 'lab';

  constructor(private http: HttpClient) {}

  getValue() {
    return this.label;
  }

  getTodos(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
