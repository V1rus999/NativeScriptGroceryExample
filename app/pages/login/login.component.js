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
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var http_1 = require("@angular/http");
var router_deprecated_1 = require("@angular/router-deprecated");
var page_1 = require("ui/page");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var user_session_1 = require("../../shared/user/user.session");
var LoginPage = (function () {
    function LoginPage(_router, _userService, _page, userSession) {
        this._router = _router;
        this._userService = _userService;
        this._page = _page;
        this.userSession = userSession;
        this.isLoading = false;
        this.isServerPage = true;
        this.user = new user_1.User();
        this.setupDefaultUser();
        this.session = userSession;
    }
    LoginPage.prototype.setupDefaultUser = function () {
        this.user.email = "barry";
        this.user.password = "K2pass!";
        this.user.server = "m1.denallix.com";
    };
    LoginPage.prototype.ngOnInit = function () {
        //Page allows editing of properties on the given page
        if (this.session.isUserLoggedIn()) {
            this._router.navigate(["List"]);
            return;
        }
        this._page.actionBarHidden = true;
        this._page.backgroundImage = this._page.ios ? "res://bg_login.jpg" : "res://bg_login";
    };
    LoginPage.prototype.setTextFieldColors = function () {
        var emailTextField = this.emailEt.nativeElement;
        var passwordTextField = this.passwordEt.nativeElement;
        var mainTextColor = new color_1.Color(!this.isServerPage ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(!this.isServerPage ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    LoginPage.prototype.submit = function () {
        if (this.isServerPage) {
            this.isLoading = true;
            this.checkServer();
        }
        else {
            this.isLoading = true;
            this.login();
        }
    };
    LoginPage.prototype.toggleDisplay = function () {
        this.setTextFieldColors();
        this.isServerPage = !this.isServerPage;
        var viewContainer = this.container.nativeElement;
        viewContainer.animate({
            backgroundColor: this.isServerPage ? new color_1.Color("#eeeeeecc") : new color_1.Color("#eeeeee80"),
            duration: 500
        });
        var loginBtnContainer = this.loginBtn.nativeElement;
        loginBtnContainer.animate({
            backgroundColor: this.isServerPage ? new color_1.Color("#CB1D00") : new color_1.Color("#CB1D0080"),
            duration: 500
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //subscribes to events in the userService using RXjs
        this._userService.login(this.user)
            .subscribe(function () {
            //uses router class to navigate to list which is registered in AppComponent
            _this.session.setCurrentUserDetails(_this.user);
            _this.session.setUserLoggedIn();
            _this._router.navigate(["List"]);
            console.log("Successful login");
            _this.isLoading = false;
        }, function (error) { return alert("Failed " + error.status + " Reason: " + JSON.stringify(error.json())); });
    };
    LoginPage.prototype.checkServer = function () {
        var _this = this;
        this._userService.checkServer(this.user)
            .subscribe(function () {
            _this.toggleDisplay();
        }, function (error) {
            _this.isLoading = false;
            if (error.status == "401") {
                _this.toggleDisplay();
            }
            else {
                alert('Failed');
            }
        });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("loginBtn"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "loginBtn", void 0);
    __decorate([
        core_1.ViewChild("email"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "emailEt", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "passwordEt", void 0);
    LoginPage = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService, page_1.Page, user_session_1.UserSession])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLGtDQUFxQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ2xELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3QixzQkFBb0IsT0FBTyxDQUFDLENBQUE7QUFHNUIsMEJBQTJCLHVCQUMzQixDQUFDLENBRGlEO0FBQ2xELDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBUzNEO0lBYUksbUJBQW9CLE9BQWMsRUFBVSxZQUF3QixFQUFVLEtBQVUsRUFBVSxXQUF5QjtRQUF2RyxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFMM0gsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUtoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7SUFDekMsQ0FBQztJQUVELDRCQUFR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