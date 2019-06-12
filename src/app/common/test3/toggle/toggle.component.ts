import { Component, OnInit, HostBinding } from '@angular/core';
import { transition, trigger, state, animate, style } from '@angular/animations'
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  animations: [
    trigger('childAnimation', [
      state('open', style({
        width: '250px',
        opacity: 0.8,
        backgroundColor: 'yellow',
      })
      ),
      state('closed', style({
        width: '100px',
        opacity: 0.4,
        backgroundColor: 'green'
      })),
      transition('* =>*', [
        animate('1s')
      ])
    ])]

})
export class ToggleComponent implements OnInit {
  isDisabled = false;
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }
  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }
  toggle() {
    this.isOpen = !this.isOpen
  }
}
