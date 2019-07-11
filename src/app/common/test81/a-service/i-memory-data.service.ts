import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from "../../../../do/index"
import { InMemoryDataService } from '../../../service/in-memory-data.service';


@Injectable({
  providedIn: 'root'
})
export class IMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'De' },
      { id: 12, name: 'De' },
      { id: 13, name: 'De' },
      { id: 14, name: 'De' },
      { id: 15, name: 'De' },
      { id: 16, name: 'De' },
      { id: 17, name: 'De' },
      { id: 18, name: 'De' },
      { id: 19, name: 'De' },
      { id: 20, name: 'De' },

    ];
    return { heroes };
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }



}
