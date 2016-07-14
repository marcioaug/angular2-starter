import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { enableProdMode } from "@angular/core";
import { routes } from "./app.routes";
import { AuthGuardService } from "./auth/auth-guard.service";
import { provideRouter } from "@angular/router";

declare var ENV: string;

if (ENV === "production") {
    enableProdMode();
}

bootstrap(AppComponent, [
    provideRouter(routes),
    AuthGuardService
]);
