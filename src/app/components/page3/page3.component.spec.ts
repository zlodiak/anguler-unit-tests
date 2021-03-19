import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { Page3Component } from './page3.component';

describe('Page3Component', () => {
  let component: Page3Component;
  let fixture: ComponentFixture<Page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page3Component ]
    })
    .compileComponents();
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
    expect(compliedComponent.querySelector('#getWordsFromComponet')).toBeTruthy();
  });

  it('should display list after getWordsFromComponent-button', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;

    const btn = compliedComponent.querySelector('#getWordsFromComponet');
    btn.dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(compliedComponent.querySelector('.word-elem')).toBeTruthy();  
    }, 100);
  });

  it('should display list after getWords-button', () => {
    fixture.detectChanges();
    const compliedComponent = fixture.debugElement.nativeElement;

    const btn = compliedComponent.querySelector('#getWordsBtn');
    btn.dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(compliedComponent.querySelector('.word-el')).toBeTruthy();  
    }, 1000);

    // tick(1000);
    // expect(compliedComponent.querySelector('.word-el')).toBeTruthy(); 
  });
});
