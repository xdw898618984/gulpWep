import { Component, OnInit } from '@angular/core';
import { Heros } from "../../../../mock/mock-hero";
import { trigger, transition, animate, style, query, stagger, state } from '@angular/animations';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ height: '*' })),
      transition('*=>void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])

    ])
  ]
})
export class AutoComponent implements OnInit {

  heroes = [];
  constructor() { }

  ngOnInit() {
    console.log(Heros);
    this.heroes = Heros;
  }
  removeHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
