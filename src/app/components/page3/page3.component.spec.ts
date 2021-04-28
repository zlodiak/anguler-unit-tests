import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { Page3Component } from './page3.component';

describe('Page3Component', () => {
  let component: Page3Component;
  let fixture: ComponentFixture<Page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be getWords-button', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;
    expect(compliedComponent.querySelector('#getWordsBtn')).toBeTruthy();
  });

  it('should be getWordsFromComponet-button', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;
    expect(
      compliedComponent.querySelector('#getWordsFromComponet')
    ).toBeTruthy();
  });

  it('should display list after getWordsFromComponent-button', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;

    const btn = compliedComponent.querySelector('#getWordsFromComponet');
    // btn.dispatchEvent(new Event('click'));
    btn.click();
    fixture.detectChanges();

    expect(compliedComponent.querySelector('.word-elem')).toBeTruthy();
  });

  it('should display list after getWords-button', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;

    const btn = compliedComponent.querySelector('#getWordsBtn');
    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(compliedComponent.querySelector('.word-el')).toBeTruthy();
  });

  it('should display 2 buttons', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;
    const btns = compliedComponent.querySelectorAll('button');
    expect(btns.length).toBe(2);
  });

  it('should not display words before clicking', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;
    const words = compliedComponent.querySelectorAll('.word');
    expect(words.length).toBe(0);
  });
});
