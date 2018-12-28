import {Component, OnInit, AfterContentChecked, AfterContentInit} from '@angular/core';

@Component({selector: 'app-life-ngafter-content', templateUrl: './life-ngafter-content.component.html', styleUrls: ['./life-ngafter-content.component.css']})
export class LifeNgafterContentComponent implements OnInit,
AfterContentChecked,
AfterContentInit {

  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    console.log("子组件投影的内容变更检测完毕ngAfterContentInit");

  }
  ngAfterContentChecked() {
    console.log("子组件投影的内容初始化完毕ngAfterContentChecked");

  }
}
