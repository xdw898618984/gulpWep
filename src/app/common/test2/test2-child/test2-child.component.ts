import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


import { FormBuilder, Validators } from "@angular/forms";
//输入属性@Input 输出属性 @Output

@Component({ selector: 'app-test2-child', templateUrl: './test2-child.component.html', styleUrls: ['./test2-child.component.css'] })
export class Test2ChildComponent implements OnInit {
  @Input()
  stockCode: string;
  stocks: string = 'IBM';
  lastPrice: number;
  amount: number;
  @Output() //输出属性，发送事件，事件名要在父组件上写出来
  lastprices: EventEmitter<Price> = new EventEmitter(); //此处需要一个泛型，这个泛型是指Price的构造函数

  @Output()
  buy: EventEmitter<Price> = new EventEmitter();
  constructor(private fb: FormBuilder) {

    setInterval(() => {
      const price: Price = new Price(88, this.stocks, 100 * Math.random());
      this.lastPrice = price.lastprice;
      this
        .lastprices
        .emit(price); //往外发送事件
    }, 2000)
  }
  contactForm = this.fb.group({
    name: ['', Validators.required]
  })
  ngOnInit() { }
  buyStock(event) {
    this.amount = this.contactForm.controls.name.value
    console.log(this.contactForm.controls.name.value);
    console.log(new Price(this.contactForm.controls.name.value, this.stockCode, this.lastPrice));
    this.buy.emit(new Price(this.contactForm.controls.name.value, this.stocks, this.lastPrice)) //向外发射事件
  }

}
export class Price {

  constructor(public amount: number, public stocks: string, public lastprice: number) { }
}
