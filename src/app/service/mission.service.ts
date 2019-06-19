import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }

  private mmissionAnnouncedSouce = new Subject<string>();
  private mmissionConfirmedSouce = new Subject<string>();


  missionAnnounced$ = this.mmissionAnnouncedSouce.asObservable();
  missionConfirmed$ = this.mmissionConfirmedSouce.asObservable();
  announceMission(mission: string) {
    this.mmissionAnnouncedSouce.next(mission)
  }
  confirmMission(astronaut: string) {
    this.mmissionConfirmedSouce.next(astronaut)
  }
}
