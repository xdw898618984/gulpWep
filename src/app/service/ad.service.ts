import { Injectable } from '@angular/core';
import { AdItem } from '../../do/index';
import { HerojobadComponent } from "../common/test7/ad-banner/herojobad/herojobad.component"
import { HeroprofileComponent } from "../common/test7/ad-banner/heroprofile/heroprofile.component"
@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(HeroprofileComponent, { name: 'Bom', bio: "Brave ads they come" }),
      new AdItem(HeroprofileComponent, { name: 'John', bio: "Smart as they come" }),
      new AdItem(HerojobadComponent, { headline: 'Hriing for seven position', body: "Submit your resume today" }),
      new AdItem(HerojobadComponent, { headline: 'Opening in all dept', body: "Apply today" }),
    ];
  }
}
