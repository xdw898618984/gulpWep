import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../do/index';
import { HeroService } from '../a-service/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(item => this.heroes = item.slice(1, 5))
  }

}
