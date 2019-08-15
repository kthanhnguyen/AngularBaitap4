import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapModalComponent } from './baitap-modal.component';

describe('BaitapModalComponent', () => {
  let component: BaitapModalComponent;
  let fixture: ComponentFixture<BaitapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
