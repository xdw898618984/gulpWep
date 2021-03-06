import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from '../common/test1/test1.component';
import { Injectable } from '@angular/core';

// resolve 守卫
@Injectable()
export class ResolveGuard implements Resolve<Product> {
    constructor(private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const productId: number = route.params['id'];
        console.log(route);

        if (productId === 1) {
            return new Product(1, "iphone7");
        } else {
            this
                .router
                .navigate(['./test4']);
            return new Product(1, "诺基亚");
        }
    }
}
