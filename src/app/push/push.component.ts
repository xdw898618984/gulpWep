import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { Star } from '../../do/index'
@Component({ selector: 'app-push', templateUrl: './push.component.html', styleUrls: ['./push.component.css'] })

export class PushComponent implements OnInit {
  slogan: string = 'change detection';
  tilte: string = "default 策略";
  star: Star = new Star('熊', '德伟')
  constructor() {

  }

  ball: any[] = ['balls1', 'balls2'];
  @ViewChild("test") test;
  ngOnInit() { }

  changeStar() {
    this.star.firstName = '刘';
    this.star.lastName = '心怡';
    this.star.type = 'Defult'
  }

  changeStarObject() {
    this.star = new Star('昌', '亚欣')
  }

  addBall(value) {
    this.ball.push(value)
    this.test.refresh()
  }

  changeRef() {
    this.ball = ['ba', 'ping']
  }

}
