import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Hero, DoCheckComponent } from './do-check/do-check.component'
@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css']
})
export class DoCheckParentComponent implements OnInit {
  hero: Hero;
  power: string;
  title = "DoCheck";
  @ViewChild(DoCheckComponent)
  childView: DoCheckComponent;
  constructor() { this.reset() }

  ngOnInit() {
  }
  reset() {
    this.hero = new Hero('Windows');
    this.power = 'sing';
    if (this.childView) { this.childView.reset() };
  }
}
