import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baitap-modal',
  templateUrl: './baitap-modal.component.html',
  styleUrls: ['./baitap-modal.component.scss']
})
export class BaitapModalComponent implements OnInit {
  @Input() productItem;

  constructor() { }

  ngOnInit() {
  }

}
