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
var http_1 = require("@angular/http");
var taskDto_1 = require("./taskDto");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var user_session_1 = require("../user/user.session");
var basicAuthHeader = require('../auth/basicAuthHeaderSetup.js');
var connectionManager = require('../../utils/connectionManager.js');
var TaskListService = (function () {
    function TaskListService(_http, session) {
        this._http = _http;
        this.session = session;
        this.apiExt = "/k2api/api/worklistitem";
    }
    TaskListService.prototype.loadTaskList = function () {
        var headers = new http_1.Headers();
        var currentUser = this.session.getCurrentUser();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", basicAuthHeader.getBasicHeader(currentUser.email, currentUser.password));
        console.log("Beginning");
        return this._http.get("https://" + currentUser.server + this.apiExt, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            // console.log("Tasklist: " + data);
            var tasklist = [];
            data.forEach(function (serverTask) {
                tasklist.push(new taskDto_1.TaskDto(serverTask.ActivityName, serverTask.ProcessFolio != "" ? serverTask.ProcessFolio : "Empty Folio", (serverTask.FormUrl != null || serverTask.FormUrl == "") ? serverTask.FormUrl : "No Form"));
            });
            console.log("Server Tasklist Size : " + tasklist.length);
            return tasklist;
        })
            .catch(this.handleErrors);
    };
    TaskListService.prototype.handleErrors = function (error) {
        console.log("Errorcode: " + error.status + "RAW: " + JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    TaskListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, user_session_1.UserSession])
    ], TaskListService);
    return TaskListService;
}());
exports.TaskListService = TaskListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUU1Qyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsbUJBQXlCLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw2QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNqRCxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUNqRSxJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBR3BFO0lBSUkseUJBQW9CLEtBQVUsRUFBVSxPQUFtQjtRQUF2QyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUYzRCxXQUFNLEdBQUcseUJBQXlCLENBQUM7SUFHbkMsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFekcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ2pCLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQzdDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLG9DQUFvQztZQUNwQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUNyQixVQUFVLENBQUMsWUFBWSxFQUN2QixVQUFVLENBQUMsWUFBWSxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsWUFBWSxHQUFHLGFBQWEsRUFDdkUsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQzdGLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFcEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUF6Q0w7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQTJDYixzQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksdUJBQWUsa0JBMEMzQixDQUFBIn0=