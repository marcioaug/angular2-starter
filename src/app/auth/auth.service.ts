import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    authorize() {
        var url, clientId;

        url = "";
        clientId = "";

        location.href = `${url}?response_type=token&client_id=${clientId}`;
    }

    extractToken(url: string) {
        var accessTokenParam = "access_token=";

        let beginIndex = url.lastIndexOf(accessTokenParam) + accessTokenParam.length;
        let endIndex = url.indexOf("&", beginIndex);
        var token = url.substring(beginIndex, endIndex);
        localStorage.setItem('token', token);
    }
}
