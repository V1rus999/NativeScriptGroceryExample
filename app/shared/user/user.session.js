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
/**
 * Created by johannesC on 2016/06/27.
 */
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var user_1 = require("./user");
var UserSession = (function () {
    function UserSession() {
        this.currentUsernameId = "cUnId";
        this.currentPasswordId = "cPwId";
        this.currentUrlId = "cUrlId";
        this.currentLoginStatus = "cLIId";
    }
    UserSession.prototype.setCurrentUserDetails = function (user) {
        ApplicationSettings.setString(this.currentUsernameId, user.email);
        ApplicationSettings.setString(this.currentPasswordId, user.password);
        ApplicationSettings.setString(this.currentUrlId, user.server);
    };
    UserSession.prototype.getCurrentUser = function () {
        var currentUser = new user_1.User();
        currentUser.email = ApplicationSettings.getString(this.currentUsernameId);
        currentUser.password = ApplicationSettings.getString(this.currentPasswordId);
        currentUser.server = ApplicationSettings.getString(this.currentUrlId);
        return currentUser;
    };
    UserSession.prototype.setUserLoggedIn = function () {
        ApplicationSettings.setString(this.currentLoginStatus, "Yes");
    };
    UserSession.prototype.isUserLoggedIn = function () {
        var status = ApplicationSettings.getString(this.currentLoginStatus);
        return !(status == null || status == "" || status == "No");
    };
    UserSession.prototype.userLoggedOut = function () {
        ApplicationSettings.setString(this.currentLoginStatus, "No");
    };
    UserSession = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserSession);
    return UserSession;
}());
exports.UserSession = UserSession;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXNzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxJQUFZLG1CQUFtQixXQUFNLHNCQUFzQixDQUFDLENBQUE7QUFDNUQscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBRzVCO0lBT0k7UUFMQSxzQkFBaUIsR0FBRyxPQUFPLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsT0FBTyxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFHLE9BQU8sQ0FBQztJQUc3QixDQUFDO0lBRUQsMkNBQXFCLEdBQXJCLFVBQXNCLElBQVM7UUFDM0IsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUM3QixXQUFXLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxRSxXQUFXLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RSxXQUFXLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLFdBQVcsQ0FBQTtJQUN0QixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDSSxJQUFJLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBcENMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFxQ2Isa0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLG1CQUFXLGNBb0N2QixDQUFBIn0=