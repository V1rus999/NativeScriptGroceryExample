import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../config";
import {TaskDto} from "./taskDto";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import {UserSession} from "../user/user.session";
let basicAuthHeader = require('../auth/basicAuthHeaderSetup.js');
let connectionManager = require('../../utils/connectionManager.js');

@Injectable()
export class TaskListService {

    apiExt = "/k2api/api/worklistitem";

    constructor(private _http:Http, private session:UserSession) {
    }

    loadTaskList() {
        let headers = new Headers();
        let currentUser = this.session.getCurrentUser();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", basicAuthHeader.getBasicHeader(currentUser.email, currentUser.password));

        console.log("Beginning");

        return this._http.get(
            "https://" + currentUser.server + this.apiExt,
            {headers: headers})
            .map(res => res.json())
            .map(data => {
                // console.log("Tasklist: " + data);
                let tasklist = [];
                data.forEach((serverTask) => {
                    tasklist.push(new TaskDto(
                        serverTask.ActivityName,
                        serverTask.ProcessFolio != "" ? serverTask.ProcessFolio : "Empty Folio",
                        (serverTask.FormUrl != null || serverTask.FormUrl == "") ? serverTask.FormUrl : "No Form")
                    );
                });

                console.log("Server Tasklist Size : " + tasklist.length);
                return tasklist;

            })
            .catch(this.handleErrors);
    }

    handleErrors(error:Response) {
        console.log("Errorcode: " + error.status + "RAW: " + JSON.stringify(error.json()));
        return Observable.throw(error);
    }

}