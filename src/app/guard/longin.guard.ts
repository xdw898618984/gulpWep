import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
// import { CanActivate } from '@angular/router/src/utils/preactivation'; 登录守卫
export class LonginGuard implements CanActivate {
    canActivate() {
        let loggedIn : boolean = Math.random() < 0.5;
        if (!loggedIn) {
            console.log(loggedIn + '用户未登录');
        } else {
            console.log(loggedIn + '用户已经登录');
        }
        return loggedIn;
    }
}