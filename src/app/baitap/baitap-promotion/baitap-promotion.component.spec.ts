import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapPromotionComponent } from './baitap-promotion.component';

describe('BaitapPromotionComponent', () => {
  let component: BaitapPromotionComponent;
  let fixture: ComponentFixture<BaitapPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
