import { Component, OnInit } from '@angular/core';
import { trigger, style, state, useAnimation, transition, } from '@angular/animations';
import { transAnimation } from "../../../animations/animations";
@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css'],
  animations: [
    trigger('openClose', [
      transition('open=>closed', [
        useAnimation(transAnimation, {
          params: {
            height: '50px',
            opacity: 0.6,
            backgroundColor: 'black',
            time: '4s'
          }
        })
      ]), transition('closed=>open', [
        useAnimation(transAnimation, {
          params: {
            height: '50px',
            opacity: 1,
            backgroundColor: 'blue',
            time: '5s'
          }
        })
      ]),
      state('open',
        style({
          height: '50px',
          opacity: 1,
          backgroundColor: 'blue',
        })),
      state('closed',
        style({
          height: '50px',
          opacity: 0.6,
          backgroundColor: 'black',
        })),
    ]
    )
  ]

})
export class ReuseComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    // this.status = 'closed'
    this.isOpen = !this.isOpen;

  }
}
