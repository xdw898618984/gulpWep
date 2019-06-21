import { Component, OnInit, Input } from '@angular/core';
import { AdItem } from '../../../do/index'
import { AdService } from '../../service/ad.service';
@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.css']
})
export class Test7Component implements OnInit {
  @Input() ads: AdItem[];
  constructor(private adSevice: AdService) { }

  ngOnInit() {
    this.ads = this.adSevice.getAds();
  }

}
