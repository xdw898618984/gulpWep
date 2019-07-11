import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {
  changeDetection: ChangeDetectionStrategy.OnPush
  @Input() ball: any[];
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.ball.push('new ball')
    }, 3000)
  }

  refresh() {
    console.log(this.ball);
    setTimeout(() => {
      this.cd.detectChanges()
    }, 4000);

  }

}
