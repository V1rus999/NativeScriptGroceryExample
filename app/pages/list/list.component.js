"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_list_service_1 = require("../../shared/tasklist/task-list.service");
var http_1 = require("@angular/http");
var router_deprecated_1 = require("@angular/router-deprecated");
var connectionManager = require('../../utils/connectionManager.js');
var applicationSettings = require("application-settings");
var user_session_1 = require("../../shared/user/user.session");
var ListPage = (function () {
    function ListPage(_router, _taskListService, userSession) {
        this._router = _router;
        this._taskListService = _taskListService;
        this.userSession = userSession;
        this.isLoading = false;
        this.listLoaded = true;
        this.taskListViewModel = [];
        this.session = userSession;
    }
    ListPage.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.listLoaded = true;
        this.taskListViewModel.push({ activityName: "Attachment", processFolio: "Folio", formUrl: "" });
    };
    ListPage.prototype.onListViewItemTap = function (args) {
        this._router.navigate(["WebForm"]);
        applicationSettings.setString("JewREll", args.formUrl);
    };
    ListPage.prototype.onConnectionChanged = function (connType) {
        alert("Conn changed");
    };
    ListPage.prototype.getTasks = function () {
        var _this = this;
        if (!connectionManager.isOnline()) {
            alert("You are offline");
            return;
        }
        this.isLoading = true;
        this.listLoaded = false;
        this._taskListService.loadTaskList()
            .subscribe(function (tasklist) {
            _this.taskListViewModel = [];
            tasklist.forEach(function (taskObject) {
                _this.taskListViewModel.unshift(taskObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListPage.prototype.logOut = function () {
        this.session.userLoggedOut();
        this._router.navigate(["Login"]);
    };
    ListPage = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./pages/list/list.html",
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
            providers: [task_list_service_1.TaskListService, http_1.HTTP_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, task_list_service_1.TaskListService, user_session_1.UserSession])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBRXZFLGtDQUE4Qix5Q0FDOUIsQ0FBQyxDQURzRTtBQUN2RSxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0Msa0NBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQsSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNwRSxJQUFZLG1CQUFtQixXQUFNLHNCQUFzQixDQUFDLENBQUE7QUFDNUQsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFTM0Q7SUFhSSxrQkFBb0IsT0FBYyxFQUFVLGdCQUFnQyxFQUFVLFdBQXlCO1FBQTNGLFlBQU8sR0FBUCxPQUFPLENBQU87UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFYL0csY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7UUFVbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQztJQVJELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFNRCxvQ0FBaUIsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHNDQUFtQixHQUFuQixVQUFvQixRQUFlO1FBQy9CLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2YsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztZQUM1QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDeEIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBeERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7WUFDaEUsU0FBUyxFQUFFLENBQUMsbUNBQWUsRUFBRSxxQkFBYyxDQUFDO1NBQy9DLENBQUM7O2dCQUFBO0lBb0RGLGVBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLGdCQUFRLFdBa0RwQixDQUFBIn0=