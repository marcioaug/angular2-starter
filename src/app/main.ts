import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { enableProdMode } from "@angular/core";

declare var ENV: string;

if (ENV === "production") {
    enableProdMode();
}

bootstrap(AppComponent, [

]);
