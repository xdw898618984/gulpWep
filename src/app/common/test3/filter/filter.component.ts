import { Component, OnInit, HostBinding } from '@angular/core';
import { Heros } from "../../../../mock/mock-hero"
import { trigger, transition, animate, style, query, stagger, state } from '@angular/animations'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class FilterComponent implements OnInit {

  @HostBinding('@pageAnimations')
  public animatePage = true;
  heroes = [];
  heroTotal = -1;
  constructor() { }

  ngOnInit() {
    console.log(Heros);
    this.heroes = Heros
  }


  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';
    this.heroes = Heros.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()))
    const newTotal = this.heroes.length;
    if (newTotal !== this.heroTotal) {
      this.heroTotal = newTotal
    } else if (!criteria) {
      this.heroTotal = -1
    }
  }

}
