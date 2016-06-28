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
var router_deprecated_1 = require("@angular/router-deprecated");
var router_1 = require("nativescript-angular/router");
var list_component_1 = require("./pages/list/list.component");
var login_component_1 = require("./pages/login/login.component");
var webform_component_1 = require("./pages/webform/webform.component");
var user_session_1 = require("./shared/user/user.session");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [router_1.NS_ROUTER_PROVIDERS, user_session_1.UserSession],
            template: '<page-router-outlet></page-router-outlet>'
        }),
        router_deprecated_1.RouteConfig([
            { path: "/login", component: login_component_1.LoginPage, name: "Login", useAsDefault: true },
            { path: "/list", component: list_component_1.ListPage, name: "List" },
            { path: "/webform", component: webform_component_1.WebformPage, name: "WebForm" },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCx1QkFBd0QsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RiwrQkFBdUIsNkJBQTZCLENBQUMsQ0FBQTtBQUNyRCxnQ0FBd0IsK0JBQStCLENBQUMsQ0FBQTtBQUN4RCxrQ0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCw2QkFBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQWF2RDtJQUFBO0lBQ0EsQ0FBQztJQVpEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLDZCQUFvQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUFtQixFQUFFLDBCQUFXLENBQUM7WUFDN0MsUUFBUSxFQUFFLDJDQUEyQztTQUN4RCxDQUFDO1FBQ0QsK0JBQVcsQ0FBQztZQUNULEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMkJBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7WUFDekUsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx5QkFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwrQkFBVyxFQUFFLElBQUksRUFBRyxTQUFTLEVBQUM7U0FDL0QsQ0FBQzs7b0JBQUE7SUFFRixtQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksb0JBQVksZUFDeEIsQ0FBQSJ9