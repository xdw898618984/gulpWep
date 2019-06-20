import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from "../service/logger.service";
// tslint:disable-next-line:prefer-const
let nextId = 1;
@Directive({
  selector: '[mySpy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) { }
  ngOnInit() {

    this.logIt(`OnInit`)
  }
  ngOnDestroy() {
    this.logIt(`OnDestroy`)

  }

  private logIt(msg: string) {

    this.logger.log(`Spy # ${nextId++} ${msg}`)
  }
}
