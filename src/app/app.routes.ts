import { RouterConfig } from "@angular/router";
import { LoginComponent } from "./auth/login.component";
import { HomeComponent } from "./home.component";
import { AuthGuardService } from "./auth/auth-guard.service"
import { CallbackComponent } from "./auth/callback.component";

export const routes: RouterConfig = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'auth', component: CallbackComponent },
    { path: 'callback', component: CallbackComponent },
];

