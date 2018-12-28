import {Component, OnInit, AfterContentChecked, AfterContentInit} from '@angular/core';

@Component({selector: 'app-life-ng-content', templateUrl: './life-ng-content.component.html', styleUrls: ['./life-ng-content.component.css']})
export class LifeNgContentComponent implements OnInit,
AfterContentChecked,
AfterContentInit {

  constructor() {}
  // 投影将父组件投影到子组件
  ngOnInit() {}
  ngAfterContentInit() {
    console.log("子组件投影的内容变更检测完毕ngAfterContentInit");

  }
  ngAfterContentChecked() {
    console.log("子组件投影的内容初始化完毕ngAfterContentChecked");

  }
}
