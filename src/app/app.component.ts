import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  go() {
    this.router.navigateByUrl('/page3');
  }
}
