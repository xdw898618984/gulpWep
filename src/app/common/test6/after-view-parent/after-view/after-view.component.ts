import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';
import { LoggerService } from '../../../../service/logger.service';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements OnInit, AfterViewChecked, AfterViewInit {
  @ViewChild(ChildViewComponent)
  viewChild: ChildViewComponent
  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor')
  }
  prevHero = '';
  comment = '';
  ngOnInit() {
  }
  ngAfterViewChecked() {
    if (this.prevHero === this.viewChild.hero) {

      this.logIt('AfterViewChecked (no change)');

    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething()
    }


  }
  ngAfterViewInit() {
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : ``;
    if (c != this.comment) {
      this.logger.tick_then(() => this.comment = c)
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method} :${child ? child.hero : "no"} child view `;
    this.logger.log(message)
  }

}
