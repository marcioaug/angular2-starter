import { Injectable } from "@angular/core";
import { ConfigService } from "../config/config.service";

@Injectable()
export class AuthService {

    constructor(private config: ConfigService) { }

    authorize() {
        var url, clientId;

        url = this.config.settings.auth.authorizeUrl;
        clientId = this.config.settings.auth.clientId;

        location.href = `${url}?response_type=token&client_id=${clientId}`;
    }

    extractToken(url: string) {
        var accessTokenParam = "access_token=";

        let beginIndex = url.lastIndexOf(accessTokenParam) + accessTokenParam.length;
        let endIndex = url.indexOf("&", beginIndex);
        var token = url.substring(beginIndex, endIndex);

        this.setToken(token);
    }

    setToken(token: string) {
        localStorage.setItem('token', `Bearer ${token}`);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isAuthenticated() {
        console.log(this.getToken());
        return (this.getToken() !== null);
    }
}
