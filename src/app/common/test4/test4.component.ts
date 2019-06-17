import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from "@angular/cdk/scrolling";

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test4Component implements OnInit {

  // customers = [
  //   { name: 'Adam', age: 23 },
  //   { name: 'Jack', age: 27 },
  //   { name: 'Katherin', age: 26 },
  //   { name: 'John', age: 30 },
  //   { name: 'Watson', age: 42 },
  // ];
  items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`)
  customers = [new Customer('Adam', 12), new Customer('Jack', 18), new Customer('John', 12), new Customer('Watson', 18)]
  customers3 = [new Customer('Adam', 12), new Customer('Jack', 18), new Customer('John', 12), new Customer('Watson', 18)]
  customers2 = [new Customer('昌亚欣', 12), new Customer('熊德伟', 18)]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
    console.log(this.customers2);

  }
  drops(event: CdkDragDrop<string[]>) {
    console.log(this.customers);
    console.log(event);
    moveItemInArray(this.customers3, event.previousIndex, event.currentIndex);
  }
  virtual(item) {
    console.log(item);

  }
}


class Customer {
  constructor(private name: string, private age: number) {

  }
};
