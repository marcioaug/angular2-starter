import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
    template: '<p>Login...</p>'
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.authorize()
    }

}
