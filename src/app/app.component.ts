import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

    constructor(public router: Router) {}

}
