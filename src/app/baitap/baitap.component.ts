import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.component.html',
  styleUrls: ['./baitap.component.scss']
})
export class BaitapComponent implements OnInit {
  productItem: any;

  getList(productItem) {
    this.productItem = productItem;
  }

  constructor() { }

  ngOnInit() {
  }

}
