import { Component, OnInit } from '@angular/core';
import { UploaderService } from "./uploader.service"
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers: [UploaderService]
})
export class UploaderComponent implements OnInit {
  message: string;
  constructor(private uploaderService: UploaderService) { }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];//文件名
    if (file) {
      this.uploaderService.upload(file).subscribe(msg => {
        input.value = null;
        this.message = msg
      })
    }
  }
  ngOnInit() {
  }

}
