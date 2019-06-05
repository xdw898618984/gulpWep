import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';
let logIndex: number = 1;
@Component({ selector: 'app-life-child', templateUrl: './life-child.component.html', styleUrls: ['./life-child.component.css'] })
export class LifeChildComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {
  @Input() name: string;
  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }
  constructor() {
    this.logIt("name属性在constructor里的值是" + name)
  }
  ngOnInit() {
    this.logIt("ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges) {
    const name = changes['name'].currentValue;
    this.logIt("name属性在ngOnChanges里的值是" + name)
  }
  ngDoCheck() {
    this.logIt("ngDoCheck" + name)
  }
  ngAfterContentInit() {
    this.logIt("ngAfterContentInit" + name)
  }
  ngAfterContentChecked() {
    this.logIt("ngAfterContentChecked" + name)
  }
  ngAfterViewInit() {
    this.logIt("ngAfterViewInit" + name)
  }
  ngAfterViewChecked() {
    this.logIt("ngAfterViewChecked" + name)
  }
  ngOnDestroy() {
    this.logIt("ngOnDestroy" + name)
  }
}
