import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {Test1Component} from './test1/test1.component';
import {Test2Component} from './test2/test2.component';
import {Test3Component} from './test3/test3.component';
import {Test4Component} from './test4/test4.component';
import {Test5Component} from './test5/test5.component';
import {AppRoutingModule} from './app-routing.module';
import { Code404Component } from './code404/code404.component';
import { Test6Component } from './test6/test6.component';
import { Test7Component } from './test7/test7.component';
import { Test8Component } from './test8/test8.component';
import { ProductComponent } from './product/product.component';
import { ProductdistComponent } from './productdist/productdist.component';

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
    ProductdistComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}