import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators"
import { MessageService } from "../../../service/message.service"
@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(private http: HttpClient, private message: MessageService) { }

  getTextFile(filename: string) {
    return this.http.get(filename, { responseType: 'text' }).pipe(tap(
      data => this.log(filename, data),
      error => this.logError(filename, error)
    ))
  }
  private log(filename: string, data: string) {
    const message = `DownloadService downloaded " ${filename}" and got "${data}".`;
    this.message.add(message)
  }

  private logError(filename: string, error: any) {

    const message = `DownloaderService failed to download "${filename}";got error"${error.message}".`;
    console.error(message);
    this.message.add(message)


  }
}
