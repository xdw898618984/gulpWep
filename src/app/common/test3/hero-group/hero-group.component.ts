import { Component, OnInit } from '@angular/core';

import { Heros } from "../../../../mock/mock-hero"
import { trigger, transition, animate, style, query, stagger, state, group } from '@angular/animations'
import { Transform } from 'stream';
@Component({
  selector: 'app-hero-group',
  templateUrl: './hero-group.component.html',
  styleUrls: ['./hero-group.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: 120,
        transform: 'translateX(0)', opacity: 1
      })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HeroGroupComponent implements OnInit {

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
