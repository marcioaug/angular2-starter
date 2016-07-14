import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
    template: '<p>Callback</p>'
})
export class CallbackComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.authService.extractToken(location.href);
            this.router.navigate(['/']);
        });
    }
}
