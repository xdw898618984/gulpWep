import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/test1/test1.component';

import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop'

@Component({ selector: 'app-test4', templateUrl: './test4.component.html', styleUrls: ['./test4.component.css'] })
export class Test4Component implements OnInit {

  customers = [
    { name: 'Adam', age: 23 },
    { name: 'Jack', age: 27 },
    { name: 'Katherin', age: 26 },
    { name: 'John', age: 30 },
    { name: 'Watson', age: 42 },
  ]; constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

  drop(event: CdkDragDrop<string[]>) {
    console.log('列表排序：', event, this.customers);
    moveItemInArray(this.customers, event.previousIndex, event.currentIndex);
  }

}
