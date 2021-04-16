import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count: number = 0;

  constructor(private http: HttpClient) {}

  getCounter() {
    return this.count;
  }
}
