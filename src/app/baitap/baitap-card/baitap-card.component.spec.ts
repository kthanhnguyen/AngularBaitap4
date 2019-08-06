import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapCardComponent } from './baitap-card.component';

describe('BaitapCardComponent', () => {
  let component: BaitapCardComponent;
  let fixture: ComponentFixture<BaitapCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
