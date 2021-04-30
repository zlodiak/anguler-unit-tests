import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Component } from './page2.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;
  let debugElement;
  let spy: any;
  let usersService: UsersService;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page2Component],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    usersService = TestBed.inject(UsersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill users after click button', () => {
    const data = [
      {
        id: 1,
        name: 'title1',
        email: 'qwerrty',
        address: {
          zipcode: '1232-2',
          city: 'xxcxc',
        },
      },
    ];
    const usersObs = of(data);
    spy = spyOn(usersService, 'getUsers').and.returnValue(usersObs);

    const buttonElem = debugElement.nativeElement.querySelector('#btn');
    buttonElem.click();
    expect(component.users).toEqual(data);
  });

  it('should display the received users', () => {
    const users = [
      {
        id: 1,
        name: 'title1',
        email: 'qwerrty',
        address: {
          zipcode: '1232-2',
          city: 'xxcxc',
        },
      },
    ];
    component.users = users;

    fixture.detectChanges();
    const userElem = nativeElement.querySelector('.user');

    console.log(userElem);
    expect(userElem.textContent).toContain(component.users[0].name);
    expect(userElem.textContent).not.toContain(component.users[0].email);
  });

  it('should display full info of received users', () => {
    const users = [
      {
        id: 1,
        name: 'title1',
        email: 'qwerrty',
        address: {
          zipcode: '1232-2',
          city: 'xxcxc',
        },
      },
    ];
    component.users = users;
    component.isShowFullInfo = true;

    fixture.detectChanges();
    const userElem = nativeElement.querySelector('.user');

    console.log(userElem);
    expect(userElem.textContent).toContain(component.users[0].email);
    expect(userElem.textContent).toContain(component.users[0].address.zipcode);
    expect(userElem.textContent).toContain(component.users[0].address.city);
  });

  it('should display full info of received users using click', () => {
    const users = [
      {
        id: 1,
        name: 'title1',
        email: 'qwerrty',
        address: {
          zipcode: '1232-2',
          city: 'xxcxc',
        },
      },
    ];
    component.users = users;

    const fullInfoElem = fixture.debugElement.query(By.css('#full'))
      .nativeElement;
    fullInfoElem.click();

    fixture.detectChanges();
    // const userElem = nativeElement.querySelector('.user');
    const userElem = fixture.debugElement.query(By.css('.user')).nativeElement;

    expect(userElem.textContent).toContain(component.users[0].email);
    expect(userElem.textContent).toContain(component.users[0].address.zipcode);
    expect(userElem.textContent).toContain(component.users[0].address.city);
  });

  it('should display info of 2 received users', () => {
    const users = [
      {
        id: 1,
        name: 'title1',
        email: 'qwerrty',
        address: {
          zipcode: '1232-2',
          city: 'xxcxc',
        },
      },
      {
        id: 2,
        name: 'title2',
        email: 'qwerrty2',
        address: {
          zipcode: '1232-22',
          city: 'xxcxc2',
        },
      },
    ];
    component.users = users;
    component.usersAmount = 2;

    fixture.detectChanges();
    const userElems = nativeElement.querySelectorAll('.user');

    expect(userElems.length).toEqual(2);
    expect(userElems.length).toBe(2);
  });
});
