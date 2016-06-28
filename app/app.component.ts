import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {ListPage} from "./pages/list/list.component";
import {LoginPage} from "./pages/login/login.component";
import {WebformPage} from "./pages/webform/webform.component";
import {UserSession} from "./shared/user/user.session";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS, UserSession],
    template: '<page-router-outlet></page-router-outlet>'
})
@RouteConfig([
    {path: "/login", component: LoginPage, name: "Login", useAsDefault: true},
    {path: "/list", component: ListPage, name: "List"},
    {path: "/webform", component: WebformPage, name : "WebForm"},
])
export class AppComponent {
}
