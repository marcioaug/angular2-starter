import { Injectable } from "@angular/core";

declare var ENV: string;

@Injectable()
export class ConfigService {

    public settings: any = {};

    constructor() {
        if (ENV === "production") {
            this.settings = {
                auth: {
                    authorizeUrl: "",
                    clientId: ""
                }
            }
        } else if (ENV === "test") {
            this.settings = {

            }
        } else {
            this.settings = {
                auth: {
                    authorizeUrl: "",
                    clientId: ""
                }
            }
        }

    }

}
