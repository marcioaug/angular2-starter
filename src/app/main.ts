import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { enableProdMode } from "@angular/core";
import { routes } from "./app.routes";
import { AuthGuard } from "./auth/auth.guard";
import { provideRouter } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { ConfigService } from "./config/config.service";
import { HTTP_PROVIDERS } from "@angular/http";

declare var ENV: string;

if (ENV === "production") {
    enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provideRouter(routes),
    ConfigService,
    AuthService,
    AuthGuard
]);
