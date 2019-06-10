import { Injectable } from '@angular/core';
import { Hero } from "../../do/index"

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messsage: string[] = [];
  add(message: string) {
    this.messsage.push(message)
  };
  clear() {
    this.messsage = []
  }
}
