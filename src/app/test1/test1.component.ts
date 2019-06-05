import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({ selector: 'app-test1', templateUrl: './test1.component.html', styleUrls: ['./test1.component.css'] })
export class Test1Component implements OnInit {
  public productId;
  public productName;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() { }

}
export class Product {
  constructor(public id: number, public name: string) { }

}
