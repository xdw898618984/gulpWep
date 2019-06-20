import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input() hero: Hero;
  @Input() power: string;
  changelog: string[] = [];

  constructor() {

  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const porpName in changes) {
      // tslint:disable-next-line:prefer-const
      let chng = changes[porpName];
      // tslint:disable-next-line:prefer-const
      let cur = JSON.stringify(chng.currentValue);
      // tslint:disable-next-line:prefer-const
      let prev = JSON.stringify(chng.previousValue);

      this.changelog.push(`${porpName}:currentValue=${cur} ,previousValue=${prev}`)
    }
  }

  reset() {
    this.changelog = [];
  }

}


export class Hero {

  constructor(public name: string) { }
}
