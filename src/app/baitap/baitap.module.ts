import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapComponent } from './baitap.component';
import { BaitapHeaderComponent } from './baitap-header/baitap-header.component';
import { BaitapCarouselComponent } from './baitap-carousel/baitap-carousel.component';
import { BaitapSmartphoneComponent } from './baitap-smartphone/baitap-smartphone.component';
import { BaitapLaptopComponent } from './baitap-laptop/baitap-laptop.component';
import { BaitapPromotionComponent } from './baitap-promotion/baitap-promotion.component';
import { BaitapCardComponent } from './baitap-card/baitap-card.component';



@NgModule({
  declarations: [BaitapComponent, BaitapHeaderComponent, BaitapCarouselComponent, BaitapSmartphoneComponent, BaitapLaptopComponent, BaitapPromotionComponent, BaitapCardComponent],
  exports: [BaitapComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModule { }
