import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test81',
  templateUrl: './test81.component.html',
  styleUrls: ['./test81.component.css']
})
export class Test81Component implements OnInit {


  showHeroes = true;
  showConfig = true;
  showDownloader = true;
  showUploader = true;
  showSearch = true;
  constructor() { }
  toggleHeroes() {
    this.showHeroes = !this.showHeroes;
  }
  toggleConfig() {
    this.showConfig = !this.showConfig;
  }
  toggleDownloader() {
    this.showDownloader = !this.showDownloader;
  }
  toggleUploader() {
    this.showUploader = !this.showUploader;
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  ngOnInit() {
  }

}
