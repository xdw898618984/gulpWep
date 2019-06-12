import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './common/test1/test1.component';
import { Test2Component } from './common/test2/test2.component';
import { Test3Component } from './common/test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';
import { AppRoutingModule } from './app-routing.module';
import { Code404Component } from './code404/code404.component';
import { Test6Component } from './test6/test6.component';
import { Test7Component } from './test7/test7.component';
import { Test8Component } from './test8/test8.component';
import { ProductComponent } from './product/product.component';
import { ProductdistComponent } from './productdist/productdist.component';
import { Test2ChildComponent } from './common/test2/test2-child/test2-child.component';
import { Test2OrderComponent } from './common/test2/test2-order/test2-order.component';
import { LifeComponent } from './life/life.component';
import { LifeChildComponent } from './life-child/life-child.component';
import { LifeNgchangeChildComponent } from './life-ngchange-child/life-ngchange-child.component';
import { LifeViewChildComponent } from './life-view-child/life-view-child.component';
import { LifeNgContentComponent } from './life-ng-content/life-ng-content.component';
import { LifeNgafterContentComponent } from './life-ngafter-content/life-ngafter-content.component';
import { PushComponent } from './push/push.component';
import { BalllistComponent } from './balllist/balllist.component';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
import { ProfileeditorComponent } from './form/profileeditor/profileeditor.component';
import { ChildmovieComponent } from './childmovie/childmovie.component';
import { SharedModule } from "./shared/shared.module";
import { AboutComponent } from './common/test3/about/about.component';
import { OpenCloseComponent } from './common/test3/open-close/open-close.component';
import { StatusComponent } from './common/test3/status/status.component';
import { HomesComponent } from './common/test3/homes/homes.component';
import { ToggleComponent } from './common/test3/toggle/toggle.component';
import { EnterComponent } from './common/test3/enter/enter.component';
import { AutoComponent } from './common/test3/auto/auto.component';
import { FilterComponent } from './common/test3/filter/filter.component';
import { HeroGroupComponent } from './common/test3/hero-group/hero-group.component';
import { OpenClosePageComponent } from './common/test3/open-close-page/open-close-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Code404Component,
    Test6Component,
    Test7Component,
    Test8Component,
    ProductComponent,
    ProductdistComponent,
    Test2ChildComponent,
    Test2OrderComponent,
    LifeComponent,
    LifeChildComponent,
    LifeNgchangeChildComponent,
    LifeViewChildComponent,
    LifeNgContentComponent,
    LifeNgafterContentComponent,
    PushComponent,
    BalllistComponent,
    FormComponent,
    Form1Component,
    ProfileeditorComponent,
    ChildmovieComponent,
    AboutComponent,
    OpenCloseComponent,
    StatusComponent,
    HomesComponent,
    ToggleComponent,
    EnterComponent,
    AutoComponent,
    FilterComponent,
    HeroGroupComponent,
    OpenClosePageComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, RouterModule, FormsModule, ReactiveFormsModule, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
