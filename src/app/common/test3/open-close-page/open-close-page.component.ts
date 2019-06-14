import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close-page',
  templateUrl: './open-close-page.component.html',
  styleUrls: ['./open-close-page.component.css']
})
export class OpenClosePageComponent implements OnInit {
  logging = false;
  constructor() { }

  ngOnInit() {
  }
  toggleLogging() {
    this.logging = !this.logging;
  }

}
