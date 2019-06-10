import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from "../service/hero.service"
import { Observable } from 'rxjs';

@Component({ selector: 'app-test1', templateUrl: './test1.component.html', styleUrls: ['./test1.component.css'] })
export class Test1Component implements OnInit {
  public productId;
  public productName;
  public time;
  public url;
  public title: string = '标题';
  constructor(private routeInfo: ActivatedRoute, private hero: HeroService) { }

  ngOnInit() {

    console.log(this.hero.getHeros());

    this.hero.getHeros().subscribe(data => {
      console.log(data);

    })
    this.time = new Observable(data => {
      setInterval(() => data.next(new Date().toString()), 2000)
    })
    this.routeInfo.url.subscribe(url => {
      this.url = url;
      console.log(`The URL Changed to:` + url);

    })

    console.log(this.routeInfo);


  }

}
export class Product {
  constructor(public id: number, public name: string) { }

}
