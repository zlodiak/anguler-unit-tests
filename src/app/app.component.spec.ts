import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Location } from '@angular/common';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let debugElement;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page3Component,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display delimeter', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;

    const link = compliedComponent.querySelector('#delimeter');
    expect(link).toBeTruthy();
  });

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));
});
