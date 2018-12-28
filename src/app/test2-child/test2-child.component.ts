import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
//输入属性@Input 输出属性 @Output

@Component({selector: 'app-test2-child', templateUrl: './test2-child.component.html', styleUrls: ['./test2-child.component.css']})
export class Test2ChildComponent implements OnInit {
  @Input()
  stockCode : string;
  @Input()
  amount : number;
  stocks : string = 'IBM';
  lastPrice : number;
  @Output() //输出属性，发送事件，事件名要在父组件上写出来
  lastprices : EventEmitter < Price >= new EventEmitter(); //此处需要一个泛型，这个泛型是指Price的构造函数

  @Output()
  buy : EventEmitter < Price >= new EventEmitter();
  constructor()
  {

    setInterval(() => {
      let price : Price = new Price(this.stocks, 100 * Math.random());
      this.lastPrice = price.lastprice;
      this
        .lastprices
        .emit(price); //往外发送事件
    }, 2000)
  }

  ngOnInit() {}
  buyStock(event) {
    console.log(new Price(this.stockCode, this.lastPrice));

    this
      .buy
      .emit(new Price(this.stocks, this.lastPrice)) //向外发射事件
  }

}
export class Price {

  constructor(public stocks : string, public lastprice : number) {}
}