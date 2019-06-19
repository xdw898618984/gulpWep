import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-lv',
  templateUrl: './countdown-parent-lv.component.html',
  styleUrls: ['./countdown-parent-lv.component.css']
})
export class CountdownParentLvComponent implements OnInit, AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;
  constructor() { }

  ngOnInit() {
  }

  seconds() {
    return 0
  }
  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
  start() {
    this.timerComponent.start()
  }
  stop() {
    this.timerComponent.stop()
  }
}
