import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

    apiExt = "/k2api/api/user/current";

    constructor(private _http:Http) {
    }

    checkServer(user:User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        var server = "https://" + user.server + this.apiExt;
        
        console.log(server);

        //noinspection TypeScriptValidateTypes
        return this._http.get(
            server,
            {headers: headers})
            .catch(this.handleErrors);
    }

    login(user:User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", require('../auth/basicAuthHeaderSetup.js').getBasicHeader(user.email, user.password));

        //noinspection TypeScriptValidateTypes
        return this._http.get(
            Config.k2ApiUrl + "k2api/api/user/current",
            {headers: headers})
            .map(response => response.json())
            .catch(this.handleErrors);
    }

    handleErrors(error:Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}