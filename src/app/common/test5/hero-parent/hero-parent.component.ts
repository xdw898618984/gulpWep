import { Component, OnInit } from '@angular/core';
import { Heros } from "../../../../mock/mock-hero"
@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
  heroes = Heros;
  master = "Master";
  constructor() { }

  ngOnInit() {
  }

}
