import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {createChangeDetectorRef} from '@angular/core/src/view/refs';

@Component({
  selector: 'app-balllist', templateUrl: './balllist.component.html', styleUrls: ['./balllist.component.css'], changeDetection: ChangeDetectionStrategy.OnPush //onPush策略
})
export class BalllistComponent implements OnInit {

  @Input()balls : any[];
  constructor() {}
  ngOnInit() {
    setTimeout(() => {
      this
        .balls
        .push('new ball')
    }, 1000);
    console.log(this.balls);

  }

}
