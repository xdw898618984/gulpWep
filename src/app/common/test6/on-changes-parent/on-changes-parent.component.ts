import { Component, OnInit, ViewChild } from '@angular/core';
import { OnChangesComponent, Hero } from './on-changes/on-changes.component';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent implements OnInit {
  hero: Hero;
  power: string;
  title = "OnChange";
  @ViewChild(OnChangesComponent)
  childView: OnChangesComponent
  constructor() { }

  ngOnInit() {
    this.reset()
  }

  reset() {
    this.hero = new Hero('Windows');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset()
    }
  }

}

