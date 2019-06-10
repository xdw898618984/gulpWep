import { Injectable } from '@angular/core';
import { Hero } from "../../do/index";

import { Heros } from "../../mock/mock-hero";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private message: MessageService) {


  }


  getHeros(): Observable<Hero[]> {
    this.message.add('heros:fetch')
    return of(Heros)
  }
}
