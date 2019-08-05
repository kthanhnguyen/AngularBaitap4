import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapComponent } from './baitap.component';
import { BaitapHeaderComponent } from './baitap-header/baitap-header.component';
import { BaitapCarouselComponent } from './baitap-carousel/baitap-carousel.component';
import { BaitapSmartphoneComponent } from './baitap-smartphone/baitap-smartphone.component';
import { BaitapLaptopComponent } from './baitap-laptop/baitap-laptop.component';
import { CardSmartphoneComponent } from './baitap-smartphone/card-smartphone/card-smartphone.component';
import { CardLaptopComponent } from './baitap-laptop/card-laptop/card-laptop.component';
import { BaitapPromotionComponent } from './baitap-promotion/baitap-promotion.component';



@NgModule({
  declarations: [BaitapComponent, BaitapHeaderComponent, BaitapCarouselComponent, BaitapSmartphoneComponent, BaitapLaptopComponent, CardSmartphoneComponent, CardLaptopComponent, BaitapPromotionComponent],
  exports: [BaitapComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModule { }
