import { Injectable } from "@angular/core";
import {Http} from "@angular/http";

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
                    authorizeUrl: "https://reliacasing.lccv.ufal.br/oauth/authorize",
                    clientId: "d33to6ydAH8wfRiNzWENtDs0RJiYeHS8xFF7i24u"
                }
            }
        }

    }

}
