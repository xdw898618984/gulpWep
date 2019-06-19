import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-parent-lv/countdown-timer/countdown-timer.component'
@Component({
  selector: 'app-countdown-parent-vc',
  templateUrl: './countdown-parent-vc.component.html',
  styleUrls: ['./countdown-parent-vc.component.css']
})
export class CountdownParentVcComponent implements OnInit, AfterViewInit {

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
