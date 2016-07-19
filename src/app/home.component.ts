import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'app/home.component.html',
    styleUrls: ['app/home.component.css']
})
export class HomeComponent implements OnInit {

    ngOnInit() {
        console.log(location.hash);
        location.hash = ""
    }

}
