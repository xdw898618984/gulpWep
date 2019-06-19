import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css']
})
export class PeekABooComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
