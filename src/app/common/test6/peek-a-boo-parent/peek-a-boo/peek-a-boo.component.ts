import {
  Component, OnInit, Input, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, SimpleChanges
} from '@angular/core';
import { LoggerService } from '../../../../service/logger.service';
let nextId = 1;
export class PeekABoo implements OnInit {

  constructor(private logger: LoggerService) {


  }

  ngOnInit() {
    this.logIt(`OnInit`)
  }
  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`)
  }
}

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css']
})
export class PeekABooComponent extends PeekABoo implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {


  @Input() name: string;

  private verb = 'initalized';

  constructor(logger: LoggerService) {
    super(logger)
    // tslint:disable-next-line:prefer-const
    let is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} konws at construction`)
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:prefer-const
    let changesMsgs: string[] = [];
    // tslint:disable-next-line:prefer-const
    for (let propName in changes) {
      if (propName === 'nmae') {
        // tslint:disable-next-line:prefer-const
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`)

      } else {
        changesMsgs.push(propName + '' + this.verb)
      }
    }

    this.logIt(`OnChange:${changesMsgs.join('; ')}`)
    this.verb = 'changed'
  }
  ngDoCheck() {

    this.logIt(`DoCheck`)
  }
  ngAfterContentInit() {
    this.logIt(`AfterContentInit`)
  }
  ngAfterContentChecked() {
    this.logIt(`AfterContentChecked`)
  }
  ngAfterViewInit() {
    this.logIt(`AfterViewInit`)
  }
  ngAfterViewChecked() {
    this.logIt(`AfterViewChecked`)
  }
  ngOnDestroy() {
    this.logIt(`OnDestory`)
  }
}
