import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLaptopComponent } from './card-laptop.component';

describe('CardLaptopComponent', () => {
  let component: CardLaptopComponent;
  let fixture: ComponentFixture<CardLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
