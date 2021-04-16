import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count: number = 0;

  constructor(private http: HttpClient) {}

  getCounter() {
    return this.count;
  }

  getGirls(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/girls');
  }

  getObservableValue() {
    return of('observable value');
  }
}
