import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../common/test1/test1.component';

@Component({ selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.css'] })
export class ProductComponent implements OnInit {
  public productId;
  public productName;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

    this
      .routeInfo
      .params
      .subscribe((params: Params) => {
        // 拿到商品id
        this.productId = params.id;
      });
    this
      .routeInfo
      .data
      .subscribe((data: {
        product: Product
      }) => {
        console.log(data);

        // this.productId = data.product.id;
        // this.productName = data.product.name
      });
  }

}
