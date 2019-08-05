import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmartphoneComponent } from './card-smartphone.component';

describe('CardSmartphoneComponent', () => {
  let component: CardSmartphoneComponent;
  let fixture: ComponentFixture<CardSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
