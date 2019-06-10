import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../common/test1/test1.component';

@Component({ selector: 'app-productdist', templateUrl: './productdist.component.html', styleUrls: ['./productdist.component.css'] })
export class ProductdistComponent implements OnInit {
  public productId;
  public productName
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

    this
      .routeInfo
      .params
      .subscribe((params: Params) => {
        //拿到商品id
        this.productId = params.id
      });
    this
      .routeInfo
      .data
      .subscribe((data: {
        product: Product
      }) => {
        this.productId = data.product.id;
        this.productName = data.product.name
      })
  }

}
