import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HeroService } from "../../service/hero.service"
import { Observable } from 'rxjs';

import { Pipes } from "../../../do/index"
import { Test2ChildComponent } from '../test2/test2-child/test2-child.component';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})

export class Test1Component implements OnInit {


  public time;
  public url;
  public title: string = '标题';
  public title1: string = 'string'; //小写转大写
  public title2: string = 'ENGLISH'; //大写转小写
  public title3: string = 'titlecase'; //标题形式
  public title4: number = 100; // 数字转金额
  public title5: Object = { foo: "base", baz: 'xiong', next: { x: 3, number: [1, 2, 3] } }; //对象转json格式
  public title6: number = 120; //数字转金额
  public title7 = new Date(); //日期格式化
  public title8 = 3.1415926; //数字转字符串
  public title9: string = '12345'; //congarray或者string中截取，创建一个新子集
  public title10 = 0.3478; //数字转百分比字符串
  public title12: Array<any> = [1, 2, 3, 4, 5, 6]; //数字

  constructor(private routeInfo: ActivatedRoute, private hero: HeroService, private router: Router) {

  }
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
  goPipe() {
    this.router.navigate(['./test1/product'])
  }
}
export class Product {
  constructor(public id: number, public name: string) { }

}
