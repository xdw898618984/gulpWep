import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit
} from '@angular/core';
import { LifeViewChildComponent } from '../life-view-child/life-view-child.component';
const logIndex: number = 1;
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit {
  public title = "tom";
  greeting = "helo";
  user: {
    name: string
  } = {
      name: 'xxx'
    }
  divContent: "<div>慕课网</div>" //属性绑定
  @ViewChild("child1") //通过viewchild调用到了子组件的方法
  child1: LifeViewChildComponent
  constructor() { }
  ngOnInit() {
    // setInterval(() => {
    this
      .child1
      .greeting("tom")
    // }, 5000)

  }
  ngAfterViewInit() {
    console.log("父组件的视图初始化完毕 ngAfterViewInit，视图组装完毕，不能再进行内容绑定，除非使用settimeout");

  }
  ngAfterViewChecked() {
    console.log('父组件的视图变更检测完毕 ngAfterViewChecked');

  }
  ngAfterContentInit() {
    console.log("父组件投影的内容变更检测完毕 ngAfterContentInit 视图是没有组装完毕,只是投影完毕，只是模板被绑定完成，还可以进行内容绑定");

  }
  ngAfterContentChecked() {
    console.log("父组件投影的内容初始化完毕 ngAfterContentChecked");

  }

}
