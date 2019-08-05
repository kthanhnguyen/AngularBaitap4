import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapSmartphoneComponent } from './baitap-smartphone.component';

describe('BaitapSmartphoneComponent', () => {
  let component: BaitapSmartphoneComponent;
  let fixture: ComponentFixture<BaitapSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
