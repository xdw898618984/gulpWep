import { Component, OnInit } from '@angular/core';
import { Heros } from "../../../../mock/mock-hero"
import { trigger, transition, animate, style, query, stagger, state } from '@angular/animations'
@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void=>*', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('*=>void', [
        animate(100, style({ transform: 'translateX(100%)' }))]
      )
    ])
  ]
})
export class EnterComponent implements OnInit {
  heroes = [];
  constructor() { }

  ngOnInit() {
    console.log(Heros);
    this.heroes = Heros
  }
  removeHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id)
  }

}
