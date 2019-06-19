import { Component, OnInit } from '@angular/core';
import { LoggerService } from "../../../service/logger.service"
@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['./peek-a-boo-parent.component.css']
})
export class PeekABooParentComponent implements OnInit {
  hasChild = false;
  hookLog: string[] = [];

  heroName = "windstorm";
  constructor(private logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  ngOnInit() {
  }
  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear();
    }
    this.hookLog = this.logger.logs;
    this.logger.tick()
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
