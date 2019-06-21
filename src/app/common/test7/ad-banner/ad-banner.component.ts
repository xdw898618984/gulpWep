import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdItem, AdComponent } from '../../../../do/index';
import { AdDirective } from '../../../directive/ad.directive';



@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective)
  adHost: AdDirective;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy() {
    clearInterval(this.interval)
  }
  loadComponent() {


    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;

  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000)
  }

}

