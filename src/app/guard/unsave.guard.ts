import { CanDeactivate } from '@angular/router';
// 路由离开的守卫
import { Test3Component } from '../common/test3/test3.component';
// 这是一个泛型
export class UnsaveGuard implements CanDeactivate<Test3Component> {
    canDeactivate(component: Test3Component) {
        return window.confirm("你还没有保存，确定要离开吗?");
    }
}
