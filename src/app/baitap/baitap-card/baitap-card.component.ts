import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baitap-card',
  templateUrl: './baitap-card.component.html',
  styleUrls: ['./baitap-card.component.scss']
})
export class BaitapCardComponent implements OnInit {
  @Input() productItem;
  @Output() emitItem = new EventEmitter();

  isHide:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  detailProduct(){
    this.emitItem.emit(this.productItem);
  }

  hideDes() {
    this.isHide = !this.isHide;
  }
}
