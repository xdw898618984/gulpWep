import {Component, OnInit, EventEmitter} from '@angular/core';
import {Price} from '../test2-child/test2-child.component';

@Component({selector: 'app-test2', templateUrl: './test2.component.html', styleUrls: ['./test2.component.css']})
export class Test2Component implements OnInit {
  stock : string;
  pricelast : Price = new Price("hh", 88)
  constructor() {}
  priceQutoteHandler(event : Price) {
    //也是需要泛型
    this.pricelast = event;
  }

  buyHandler(event : Price) {
    //也是需要泛型这里是中间人模式的传值，传到test2-order组件中去
    console.log(event);

    this.pricelast = event;
  }
  ngOnInit() {}

}
