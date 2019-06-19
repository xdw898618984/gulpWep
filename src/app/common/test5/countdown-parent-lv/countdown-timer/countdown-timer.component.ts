import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  seconds = 11;
  message = '';

  constructor() { }

  ngOnInit() {

    this.start()
  }
  ngOnDestroy() {
    this.clear()
  }
  clear() {
    clearInterval(this.intervalId);
  }

  start() {
    this.countDown()
  }
  stop() {
    this.clear()
  }

  countDown() {
    this.clear();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!'
      } else {
        if (this.seconds < 0) {
          this.seconds = 10
        } else {
          this.message = `T-${this.seconds} seconds and counting`

        }
      }
    }, 1000)
  }

}
