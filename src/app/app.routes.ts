import { RouterConfig } from "@angular/router";
import { LoginComponent } from "./auth/login.component";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "./auth/auth.guard"
import { CallbackComponent } from "./auth/callback.component";

export const routes: RouterConfig = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'auth', component: CallbackComponent },
    { path: 'callback', component: CallbackComponent },
];

