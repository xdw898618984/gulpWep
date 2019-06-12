import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations'
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  animations: [
    trigger('sliderStatus', [
      state('inactive', style({ backgroundColor: 'blue' })),
      state('active', style({ backgroundColor: 'orange' })),
      transition('*=>active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.6 }),
          style({ backgroundColor: 'orange', offset: 1 })
        ]))
      ]),
      transition('*=>inactive', [
        animate('2s', keyframes([
          style({ backgroundColor: 'orange', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.6 }),
          style({ backgroundColor: 'blue', offset: 1 })
        ]))
      ]),
      transition('*=>active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' })
        ]))
      ])
    ])
  ]
})
export class StatusComponent implements OnInit {
  status: 'active' | 'inactive' = 'inactive';

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.status === 'active' ? this.status = 'inactive' : this.status = 'active'

  }
}
