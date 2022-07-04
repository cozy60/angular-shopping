import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// app-product-alerts라는 selector는 이 컴포넌트가 어떤 태그 이름으로 사용될지 결정
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // 해당 프로퍼티의 값을 부모 컴포넌트에서 받아온다는 것을 의미
  // ProductListComponent가 부모 컴포넌트
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
