import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';

@Component({selector: 'app-life-ngchange-child', templateUrl: './life-ngchange-child.component.html', styleUrls: ['./life-ngchange-child.component.css']})
export class LifeNgchangeChildComponent implements OnInit,
DoCheck,
OnChanges {
  @Input()greeting : string; //在js中字符串是不可变的
  @Input()user : { //对象是可变的

    name: string
  };

  message = "初始化消息";
  olduser : string;
  changeDetected : boolean = false;
  nochangenumber : number = 0;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes : SimpleChanges) : void {

    console.log(JSON.stringify(changes, null, 2));
    // console.log(JSON.stringify(changes));

  }
  ngDoCheck() {
    if (this.user.name !== this.olduser) {
      this.changeDetected = true;
      console.log("DoCheck:user.name从" + this.olduser + "变为" + this.user.name);
      this.olduser = this.user.name
    }
    if (this.changeDetected) {
      this.nochangenumber = 0
    } else {
      this.nochangenumber = this.nochangenumber + 1;
      console.log("DoCCheck:user.name没变化ngDochek方法已经被调用" + this.nochangenumber);

    }
    this.changeDetected = false
  }
}
