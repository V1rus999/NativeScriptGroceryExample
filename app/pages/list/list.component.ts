import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {TaskDto} from "../../shared/tasklist/taskDto"
import {TaskListService} from "../../shared/tasklist/task-list.service"
import {HTTP_PROVIDERS} from "@angular/http";
import {Router} from "@angular/router-deprecated";
let connectionManager = require('../../utils/connectionManager.js');
import * as applicationSettings from "application-settings";
import {UserSession} from "../../shared/user/user.session";

@Component({
    selector: "list",
    templateUrl: "./pages/list/list.html",
    styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
    providers: [TaskListService, HTTP_PROVIDERS],
})

export class ListPage implements OnInit {

    isLoading = false;
    listLoaded = true;
    taskListViewModel:Array<TaskDto> = [];
    session : UserSession;

    ngOnInit():any {
        this.isLoading = false;
        this.listLoaded = true;
        this.taskListViewModel.push({activityName: "Attachment", processFolio: "Folio", formUrl: ""});
    }

    constructor(private _router:Router, private _taskListService:TaskListService, private userSession : UserSession) {
        this.session = userSession;
    }

    onListViewItemTap(args:TaskDto) {
        this._router.navigate(["WebForm"]);
        applicationSettings.setString("JewREll", args.formUrl);
    }

    onConnectionChanged(connType:number) {
        alert("Conn changed")
    }

    getTasks() {
        if (!connectionManager.isOnline()) {
            alert("You are offline");
            return;
        }

        this.isLoading = true;
        this.listLoaded = false;
        this._taskListService.loadTaskList()
            .subscribe(tasklist => {
                this.taskListViewModel = [];
                tasklist.forEach((taskObject) => {
                    this.taskListViewModel.unshift(taskObject);
                });

                this.isLoading = false;
                this.listLoaded = true;
            });
    }

    logOut() {
        this.session.userLoggedOut();
        this._router.navigate(["Login"]);
    }
}