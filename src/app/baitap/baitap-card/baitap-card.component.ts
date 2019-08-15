import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baitap-card',
  templateUrl: './baitap-card.component.html',
  styleUrls: ['./baitap-card.component.scss']
})
export class BaitapCardComponent implements OnInit {
  @Input() productItem;
  @Output() eventProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  detailProduct(){
    this.eventProduct.emit(this.productItem);
  }
}
