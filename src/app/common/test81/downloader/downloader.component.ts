import { Component, OnInit } from '@angular/core';
import { DownloaderService } from "./downloader.service";
@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css'],
  providers: [DownloaderService]
})
export class DownloaderComponent implements OnInit {
  contents: string;
  constructor(private downloaderService: DownloaderService) { }
  clear() {
    this.contents = undefined;
  }
  download() {
    this.downloaderService.getTextFile('assets/textfile.txt').subscribe(res => this.contents = res)
  }
  ngOnInit() {
  }

}
