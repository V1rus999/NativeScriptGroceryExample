/**
 * Created by johannesC on 2016/06/27.
 */
import {Injectable} from "@angular/core";
import * as ApplicationSettings from "application-settings";
import {User} from "./user";

@Injectable()
export class UserSession {

    currentUsernameId = "cUnId";
    currentPasswordId = "cPwId";
    currentUrlId = "cUrlId";
    currentLoginStatus = "cLIId";

    constructor() {
    }

    setCurrentUserDetails(user:User) {
        ApplicationSettings.setString(this.currentUsernameId, user.email);
        ApplicationSettings.setString(this.currentPasswordId, user.password);
        ApplicationSettings.setString(this.currentUrlId, user.server);
    }

    getCurrentUser():User {
        let currentUser = new User();
        currentUser.email = ApplicationSettings.getString(this.currentUsernameId);
        currentUser.password = ApplicationSettings.getString(this.currentPasswordId);
        currentUser.server = ApplicationSettings.getString(this.currentUrlId);
        return currentUser
    }

    setUserLoggedIn() {
        ApplicationSettings.setString(this.currentLoginStatus, "Yes");
    }

    isUserLoggedIn() : boolean {
        var status = ApplicationSettings.getString(this.currentLoginStatus);
        return !(status == null || status == "" || status == "No");
    }

    userLoggedOut() {
        ApplicationSettings.setString(this.currentLoginStatus, "No");
    }
}

