import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapLaptopComponent } from './baitap-laptop.component';

describe('BaitapLaptopComponent', () => {
  let component: BaitapLaptopComponent;
  let fixture: ComponentFixture<BaitapLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
