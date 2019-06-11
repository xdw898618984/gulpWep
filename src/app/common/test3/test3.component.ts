import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from "@angular/animations";

import { slideInAnimation } from "../../animations/animations";
import { RouterOutlet } from "@angular/router"



@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
  animations: [slideInAnimation]
})
export class Test3Component implements OnInit {
  public animationsDisabled = false;
  constructor() { }

  ngOnInit() {
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }

}
