import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements OnInit, DoCheck {
  @Input() hero: Hero;
  @Input() power: string;
  changeDetected = false;
  changelog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;
  constructor() { }

  ngOnInit() {
  };
  ngDoCheck() {

    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changelog.push(`DoCheck:Hero name changed to "${this.hero.name}" from "${this.oldHeroName}" `);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changelog.push(`DoCheck: Power changed to " ${this.power} from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {

      this.noChangeCount = 0;
    } else {
      let count = this.noChangeCount += 1;
      let noChangeMsg = `DoCheck called ${count} x when no change to hero or power`;
      if (count === 1) {
        this.changelog.push(noChangeMsg);
      } else {
        this.changelog[this.changelog.length - 1] = noChangeMsg;
      }
    }
    this.changeDetected = false;
  }

  reset() {
    this.changeDetected = true;
    this.changelog = [];
  }
}

export class Hero {
  constructor(public name: string) { }
}

