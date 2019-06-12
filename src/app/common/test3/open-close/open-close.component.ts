import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.4,
        backgroundColor: 'skyblue'
      })),
      transition('open=>closed', [
        animate('1s')
      ]),
      transition('closed=>open', [
        animate('0.5s')
      ]),
      transition('*=>open', [
        animate('0.5s', style({ opacity: '*' }))
      ]),
      transition('*=>closed', [
        animate('1s')
      ]),
      transition('open=>closed', [
        animate('0.5s')
      ])


    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  @Input() logging = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen
  }
  onAnimationEvent(event: AnimationEvent) {
    console.log(!this.logging);

    if (this.logging) {
      return
    }
    console.log('oo');

    console.log(`Animation Triger: ${event.triggerName} `);
    console.log(`Phase: ${event.phaseName} `);
    console.log(`Total time: ${event.totalTime} `);
    console.log(`From: ${event.fromState} `);
    console.log(`To: ${event.toState} `);
    console.log(`Element: ${event.element} `);
    console.log(`event: ${event} `);

  }
}
