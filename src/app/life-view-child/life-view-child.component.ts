import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-life-view-child',
  templateUrl: './life-view-child.component.html',
  styleUrls: ['./life-view-child.component.css']
})
export class LifeViewChildComponent implements OnInit,
  AfterViewInit,
  AfterViewChecked {

  constructor() { }

  ngOnInit() { }
  greeting(name: string) {
    console.log("hello" + name);

  }
  ngAfterViewInit() {
    console.log("子组件的视图初始化完毕");

  }
  ngAfterViewChecked() {
    console.log('子组件的视图变更检测完毕');

  }

}
