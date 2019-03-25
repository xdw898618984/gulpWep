import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({selector: 'app-push', templateUrl: './push.component.html', styleUrls: ['./push.component.css']})
export class PushComponent implements OnInit {
  balls : any[] = ['baskball', 'football']
  constructor(private ref : ChangeDetectorRef) {}

  ngOnInit() {}
  change() {
    this.balls = ['balls', 'pingpong']
  }
  add(ball) {
    console.log(ball);

    this
      .balls
      .push(ball)
    this
      .ref
      .detectChanges()
    this
      .ref
      .markForCheck();
    this
      .ref
      .reattach()

  }
}
