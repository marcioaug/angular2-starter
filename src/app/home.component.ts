import { Component, OnInit } from '@angular/core';

@Component({
    template: '<h1>My First Angular 2 App</h1>'
})
export class HomeComponent implements OnInit {

    ngOnInit() {
        console.log(location.hash);
        location.hash = ""
    }

}
