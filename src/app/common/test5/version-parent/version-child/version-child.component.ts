import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = []
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    // tslint:disable-next-line:prefer-const
    let log: string[] = [];
    // tslint:disable-next-line:forin
    for (const propName in changes) {

      // tslint:disable-next-line:prefer-const
      let changeProp = changes[propName];
      // tslint:disable-next-line:prefer-const
      let to = JSON.stringify(changeProp.currentValue);
      if (changeProp.isFirstChange()) {
        log.push(`Initial value of  ${propName} set to  ${to}`)

      } else {
        // tslint:disable-next-line:prefer-const
        let from = JSON.stringify(changeProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`)
      }
    }
    this.changeLog.push(log.join(', '))
  }

}
