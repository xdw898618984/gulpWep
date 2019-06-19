import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MissionService } from '../../../../service/mission.service'

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit, OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
  constructor(private missionService: MissionService) {

    this.subscription = missionService.missionAnnounced$.subscribe(mission => {
      this.mission = mission;
      this.announced = true;
      this.confirmed = false;
    })
  }

  ngOnInit() {
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut)
  }
  ngOnDestroy() {
    //避免内存泄露
    this.subscription.unsubscribe()
  }

}
