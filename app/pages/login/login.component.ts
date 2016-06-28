import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {Router} from "@angular/router-deprecated";
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {setHintColor} from "../../utils/hint-util"
import {UserSession} from "../../shared/user/user.session";

@Component({
    selector: "my-app",
    providers: [UserService, HTTP_PROVIDERS],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})

export class LoginPage implements OnInit {

    //Gets a reference to the # named view element in login.html
    @ViewChild("container") container:ElementRef;
    @ViewChild("loginBtn") loginBtn:ElementRef;
    @ViewChild("email") emailEt:ElementRef;
    @ViewChild("password") passwordEt:ElementRef;

    isLoading = false;
    isServerPage = true;
    user:User;
    session : UserSession;

    constructor(private _router:Router, private _userService:UserService, private _page:Page, private userSession : UserSession) {
        this.user = new User();
        this.setupDefaultUser();
        this.session = userSession;
    }

    setupDefaultUser() {
        this.user.email = "";
        this.user.password = "!";
        this.user.server = "";
    }

    ngOnInit() {
        //Page allows editing of properties on the given page
        if (this.session.isUserLoggedIn()) {
            this._router.navigate(["List"]);
            return;
        }

        this._page.actionBarHidden = true;
        this._page.backgroundImage = this._page.ios ? "res://bg_login.jpg" : "res://bg_login";
    }

    setTextFieldColors() {
        let emailTextField = <TextField> this.emailEt.nativeElement;
        let passwordTextField = <TextField> this.passwordEt.nativeElement;

        let mainTextColor = new Color(!this.isServerPage ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;

        let hintColor = new Color(!this.isServerPage ? "#ACA6A7" : "#C4AFB4");
        setHintColor({view: emailTextField, color: hintColor});
        setHintColor({view: passwordTextField, color: hintColor});
    }

    submit() {
        if (this.isServerPage) {
            this.isLoading = true;
            this.checkServer();
        } else {
            this.isLoading = true;
            this.login();
        }
    }

    toggleDisplay() {
        this.setTextFieldColors();
        this.isServerPage = !this.isServerPage;

        let viewContainer = <View> this.container.nativeElement;
        viewContainer.animate({
            backgroundColor: this.isServerPage ? new Color("#eeeeeecc") : new Color("#eeeeee80"),
            duration: 500
        });

        let loginBtnContainer = <View> this.loginBtn.nativeElement;
        loginBtnContainer.animate({
            backgroundColor: this.isServerPage ? new Color("#CB1D00") : new Color("#CB1D0080"),
            duration: 500
        });

    }

    login() {
        //subscribes to events in the userService using RXjs
        this._userService.login(this.user)
            .subscribe(
                () => {
                    //uses router class to navigate to list which is registered in AppComponent
                    this.session.setCurrentUserDetails(this.user);
                    this.session.setUserLoggedIn();
                    
                    this._router.navigate(["List"]);
                    console.log("Successful login");
                    this.isLoading = false;
                },
                (error) => alert("Failed " + error.status + " Reason: " + JSON.stringify(error.json()))
            );
    }

    checkServer() {
        this._userService.checkServer(this.user)
            .subscribe(
                () => {
                    this.toggleDisplay();
                },
                (error) => {
                    this.isLoading = false;
                    if (error.status == "401") {
                        this.toggleDisplay();
                    } else {
                        alert('Failed');
                    }
                }
            );
    }
}