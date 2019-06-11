import {Component, OnInit, Input} from '@angular/core';
import {Price} from '../test2-child/test2-child.component';

@Component({selector: 'app-test2-order', templateUrl: './test2-order.component.html', styleUrls: ['./test2-order.component.css']})
export class Test2OrderComponent implements OnInit {
  @Input()
  pricelast : Price
  constructor() {}

  ngOnInit() {}

}
