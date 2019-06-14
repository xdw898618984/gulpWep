import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './common/test1/test1.component';
import { Test2Component } from './common/test2/test2.component';
import { Test3Component } from './common/test3/test3.component';
import { Test4Component } from './common/test4/test4.component';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';
import { Test7Component } from './test7/test7.component';
import { Test8Component } from './test8/test8.component';
import { LifeComponent } from './life/life.component';
import { ProductComponent } from './product/product.component';
import { ProductdistComponent } from './productdist/productdist.component';
import { Code404Component } from './code404/code404.component';
import { LonginGuard } from './guard/longin.guard';
import { UnsaveGuard } from './guard/unsave.guard';
import { ResolveGuard } from './guard/resolve.guard';
import { PushComponent } from './push/push.component';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
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
import { ReuseComponent } from './common/test3/reuse/reuse.component';

const routes: Routes = [
  {
    path: 'test1',
    component: Test1Component,
    children: [
      {
        path: 'product',
        component: ProductComponent,
        // resolve: {
        //   product: ResolveGuard
        // }
      }, {
        path: 'productdist/:id',
        component: ProductdistComponent,
        resolve: {
          product: ResolveGuard
        }
      }
    ]

  }, {
    path: 'test2',
    component: Test2Component
  }, {
    path: 'test3',
    component: Test3Component,
    children: [{
      path: 'homes',
      component: HomesComponent,
      data: { animation: 'HomePage' }
    }, {
      path: 'about',
      component: AboutComponent,
      data: { animation: 'AboutPage' }
    },
    {
      path: 'open',
      component: OpenClosePageComponent,
    },
    {
      path: 'status',
      component: StatusComponent,
    },
    {
      path: 'toggle',
      component: ToggleComponent,
    },
    {
      path: 'enter',
      component: EnterComponent,
    },
    {
      path: 'auto',
      component: AutoComponent,
    },
    {
      path: 'status',
      component: StatusComponent,
    },
    {
      path: 'filter',
      component: FilterComponent,
    },
    {
      path: 'group',
      component: HeroGroupComponent,

    },
    {
      path: 'reuse',
      component: ReuseComponent,

    }],
    canActivate: [LonginGuard],
    canDeactivate: [UnsaveGuard]
  }, {
    path: 'test4',
    component: Test4Component
  }, {
    path: 'test5',
    component: Test5Component
  }, {
    path: 'test6',
    component: Test6Component
  }, {
    path: 'test7',
    component: Test7Component
  }, {
    path: 'life',
    component: LifeComponent
  }, {
    path: 'form',
    component: FormComponent
  }, {
    path: 'form1',
    component: Form1Component
  }, {
    path: 'push',
    component: PushComponent
  }, {
    path: 'test8',
    component: Test8Component,
    outlet: 'aux'
  }, {
    path: '**',
    component: Code404Component
  }, {
    path: '',
    redirectTo: 'code404',
    pathMatch: 'full'

  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  // 登录守卫和离开守卫 resolve 守卫
  providers: [LonginGuard, UnsaveGuard, ResolveGuard]
})
export class AppRoutingModule { }
